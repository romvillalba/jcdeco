"use client";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown, Share2, ShareIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";

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
    required_error: "Por favor elige una esencia.",
  }),
  color: z.string({
    required_error: "Por favor elige un color.",
  }),
  cantidad: z.coerce
    .number({ invalid_type_error: "Ingresa una cantidad valida" })
    .gte(1, { message: "Ingresa una cantidad valida" }),
});

export function CandleForm() {
  const searchParams = useSearchParams();
  const form = useForm({ resolver: zodResolver(FormSchema) });

  useEffect(() => {
    const esencia = searchParams.get("esencia");
    const color = searchParams.get("color");
    const cantidad = parseInt(searchParams.get("cantidad") || "0");
    form.setValue("esencia", parseInt(esencia));
    form.setValue("color", color);
    form.setValue("cantidad", parseInt(cantidad));
  }, [searchParams, form]);

  function onSubmit(
    { esencia, color, cantidad } /*: z.infer<typeof FormSchema>*/
  ) {
    console.log(esencia); // Esencia seleccionada
    console.log(color); // Color
    console.log(cantidad); // Color
  }
  const share = () => {
    const { control, getValues } = form;
    const values = getValues();
    const { esencia, color, cantidad } = values;
  
    if (!esencia || !color || !cantidad) {
      // Mostrar un mensaje de error
      return;
    }
  
    const params = new URLSearchParams({
      esencia,
      color,
      cantidad,
    });
    const link = window.origin + window.location.pathname + "?" + params.toString();
    console.log(link)
    navigator.clipboard.writeText(link)
  };
  
  return (
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
              <FormDescription>Este sera el aroma de tu vela.</FormDescription>
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
                            style={{ color: color.value }}
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
                    value={field.value || 0}
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
          Armar Pedido
        </Button>
      </form>
    </Form>
  );
}