"use client";

import { useContext, useEffect,useState} from "react";
import { useForm } from "react-hook-form";
import { useSearchParams,useRouter, useParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown, Share2 } from "lucide-react";
import * as z from "zod";
import { CartContext } from "@/components/providers/cart-provider";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const esencias = [
  { label: "Esencia 1", value: 1 },
  { label: "Esencia 2", value: 2 },
  { label: "Esencia 3", value: 3 },
  { label: "Esencia 4", value: 4 },
  { label: "Esencia 5", value: 5 },
  { label: "Esencia 6", value: 6 },
  { label: "Esencia 7", value: 7 },
  { label: "Esencia 8", value: 8 },
  { label: "Esencia 9", value: 9 },
];
const colores = [
  { nombre: "Rojo", value: "#FF0000" },
  { nombre: "Verde", value: "#00FF00" },
  { nombre: "Azul", value: "#0000FF" },
  { nombre: "Amarillo", value: "#FFFF00" },
  { nombre: "Naranja", value: "#FFA500" },
  { nombre: "Morado", value: "#800080" },
];

const FormSchema = z.object({
  esencia: z.number({
    invalid_type_error: "Por favor elige una esencia.",
    required_error: "Por favor elige una esencia.",
  }),
  color: z.string({
    invalid_type_error: "Por favor elige un color.",
    required_error: "Por favor elige un color.",
  }),
  cantidad: z.coerce
    .number({ invalid_type_error: "Ingresa una cantidad valida" })
    .gte(1, { message: "Ingresa una cantidad valida" }),
});

export function CandleForm() {
  const {cartItems , setCartItems } = useContext(CartContext);
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams()
  const { toast } = useToast();

  const [isOpen, setIsOpen] = useState(false);


  const form = useForm({ resolver: zodResolver(FormSchema) });

  useEffect(() => {
    const esencia = searchParams.get("esencia");
    const color = searchParams.get("color");
    const cantidad = parseInt(searchParams.get("cantidad") || "0");
    form.setValue("esencia", parseInt(esencia));
    form.setValue("color", color);
    form.setValue("cantidad", parseInt(cantidad));
  }, [searchParams, form]);

  function onSubmit({ esencia, color, cantidad }) {
    const envase = params.envase;
    setCartItems([...cartItems,{envase,esencia,color,cantidad}])
    setIsOpen(true)
  }

 
  const share = () => {
    const { control, getValues } = form;
    const values = getValues();
    const { esencia, color, cantidad } = values;

    if (!esencia || !color || !cantidad) {
      toast({
        title: "Aun no has terminado",
        description: "Completa el formulario para poder compartir!",
      });
      return;
    }

    const shareParams = new URLSearchParams({
      esencia,
      color,
      cantidad,
    });
    const link =
      window.origin + window.location.pathname + "?" + shareParams.toString();
    navigator.clipboard.writeText(link);
    toast({
      title: "Vinculo copiado al portapapeles!",
      description: "Comparte tu vela con tus amigos!",
    });
  };

  return (
    <div className="lg:flex lg:justify-center gap-16 space-y-2 items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="esencia"
            id="esencia"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Esencia</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-[260px] justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? esencias.find(
                              esencia => esencia.value === field.value
                            )?.label
                          : "Elije una esencia"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[260px] p-0">
                    <Command>
                      <CommandInput placeholder="Buscar esencia..." />
                      <CommandEmpty>Esencia no encontrada.</CommandEmpty>
                      <CommandGroup>
                        {esencias.map(esencia => (
                          <CommandItem
                            value={esencia.label}
                            key={esencia.value}
                            onSelect={() => {
                              form.setValue("esencia", esencia.value);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                esencia.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {esencia.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Este sera el aroma de tu vela.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Elige el color</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex w-[260px] flex-wrap justify-center"
                  >
                    {colores.map((color, index) => (
                      <div key={color + index}>
                        <FormItem className="flex flex-row space-x-1 space-y-0 my-2 w-[80px]">
                          <FormControl>
                            <RadioGroupItem
                              value={color.value}
                              style={{
                                background:
                                  field.value === color.value && color.value,
                                color:
                                  field.value === color.value && color.value,
                              }}
                              checked={field.value === color.value}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {color.nombre}
                          </FormLabel>
                        </FormItem>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between items-end">
            <FormField
              control={form.control}
              name="cantidad"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cantidad</FormLabel>
                  <FormControl>
                    <Input
                      className="w-[100px]"
                      {...field}
                      type={`number`}
                      value={field.value || ""}
                    />
                  </FormControl>

                  <FormMessage className="absolute y-4" />
                </FormItem>
              )}
            />
            <Button type="button" onClick={() => share()}>
              <Share2 />
              Compartir
            </Button>
          </div>
          <Button className="translate-y-6 w-[260px]" type="submit">
            Agregar al Carrito
          </Button>
        </form>
      </Form>

      <AlertDialog open={isOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Producto agregado al carrito
            </AlertDialogTitle>
            <AlertDialogDescription>
              Puedes finalizar tu pedido o continuar comprando
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Finalizar Compra
            </AlertDialogAction>
            {/* <AlertDialogAction
              onClick={() => {
                handleConfirmInstagram();
              }}
            >
              Instagram
            </AlertDialogAction> */}
            <AlertDialogCancel
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Seguir Comprando
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
