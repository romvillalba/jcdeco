"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
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
  { nombre: "Rojo", valor: "#FF0000" },
  { nombre: "Verde", valor: "#00FF00" },
  { nombre: "Azul", valor: "#0000FF" },
  { nombre: "Amarillo", valor: "#FFFF00" },
  { nombre: "Naranja", valor: "#FFA500" },
  { nombre: "Morado", valor: "#800080" },
];

const FormSchema = z.object({
  esencia: z.string({
    required_error: "Por favor elige una esencia.",
  }),
});

export function CandleForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data /*: z.infer<typeof FormSchema>*/) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="esencia"
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
                        "w-[200px] justify-between",
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
                <PopoverContent className="w-[200px] p-0">
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
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Elige el color</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex w-[300px] flex-wrap justify-between;"
                >
                  {colores.map(color => (
                    <div key={color}>
                      <FormItem className="flex flex-row items-center space-x-1 space-y-0 w-[80px]">
                        <FormControl>
                          <RadioGroupItem value={color.valor} />
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
        <Button type="submit">Crear</Button>
      </form>
    </Form>
  );
}
