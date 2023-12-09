"use client"
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Share2 } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  nombre: z.string({
    required_error: "Por favor ingresa tu nombre.",
  }),
  apellido: z.string({
    required_error: "Por favor ingresa tu apellido.",
  }),
  email: z.string({
    format: "email",
    required_error: "Por favor ingresa un correo electrónico válido.",
  }),
  telefono: z.string({
    required_error: "Por favor ingresa tu número de teléfono.",
  }),
  instagram: z.string({
    required_error: "Por favor ingresa tu nombre de Instagram.",
  }),
});

export function ClientForm() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const form = useForm({ resolver: zodResolver(FormSchema) });

  useEffect(() => {
    const nombre = searchParams.get("nombre");
    const apellido = searchParams.get("apellido");
    const email = searchParams.get("email");
    const telefono = searchParams.get("telefono");
    const instagram = searchParams.get("instagram");

    form.setValue("nombre", nombre || "");
    form.setValue("apellido", apellido || "");
    form.setValue("email", email || "");
    form.setValue("telefono", telefono || "");
    form.setValue("instagram", instagram || "");
  }, [searchParams, form]);

  function onSubmit(values) {
    console.log("", values); // ver si se puede mandar por whatsapp
  }

  const share = () => {
    const { control, getValues } = form;
    const values = getValues();
    const { nombre, apellido, email, telefono, instagram } = values;

    if (!nombre || !apellido || !email || !telefono || !instagram) {
      toast({
        title: "Aún no has terminado",
        description: "Completa el formulario para poder compartir.",
      });
      return;
    }

    const params = new URLSearchParams({
      nombre,
      apellido,
      email,
      telefono,
      instagram,
    });

    const link =
      window.origin + window.location.pathname + "?" + params.toString();
    navigator.clipboard.writeText(link);

    toast({
      title: "Enlace copiado al portapapeles",
      description: "Comparte tu información de contacto con tus amigos.",
    });
  };

  return (
    <div className="lg:flex lg:justify-center my-12 space-y-2 items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="apellido"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellido</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo Electrónico</FormLabel>
                <FormControl>
                  <Input {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="telefono"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input {...field} type="tel" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="instagram"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Instagram</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between items-end">
            <Button className="mb-4 w-[260px]" type="submit">
              Enviar Información
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}