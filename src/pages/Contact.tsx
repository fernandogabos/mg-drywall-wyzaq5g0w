import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { SectionHeading } from '@/components/SectionHeading'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { MapPin, Phone, Mail } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres.'),
  email: z.string().email('E-mail inválido.'),
  phone: z.string().min(10, 'Telefone inválido.'),
  type: z.string().min(1, 'Selecione o tipo de projeto.'),
  message: z.string().min(10, 'A mensagem deve ter pelo menos 10 caracteres.'),
})

export default function Contact() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      type: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: 'Solicitação Enviada',
      description: 'Recebemos sua mensagem. Entraremos em contato em breve.',
    })
    form.reset()
  }

  return (
    <div className="pt-32 pb-24 bg-background animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <SectionHeading subtitle="Atendimento" title="Inicie Seu Projeto Conosco" />
            <p className="text-muted-foreground font-light leading-relaxed mb-12 max-w-md">
              Oferecemos consultoria especializada para arquitetos, engenheiros e clientes finais
              que buscam excelência em sistemas de drywall e forros acústicos em Jundiaí e região.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="text-foreground mt-1" size={24} />
                <div>
                  <h4 className="font-serif text-xl text-primary mb-1">Localização</h4>
                  <p className="text-muted-foreground text-sm">Av. Nove de Julho, Jundiaí - SP</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="text-foreground mt-1" size={24} />
                <div>
                  <h4 className="font-serif text-xl text-primary mb-1">Telefone / WhatsApp</h4>
                  <p className="text-muted-foreground text-sm">+55 (11) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="text-foreground mt-1" size={24} />
                <div>
                  <h4 className="font-serif text-xl text-primary mb-1">E-mail</h4>
                  <p className="text-muted-foreground text-sm">contato@mgdrywall.com.br</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-accent p-8 md:p-12 border border-border">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-medium uppercase tracking-widest text-xs">
                        Nome Completo
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-background border-border rounded-none h-12 focus-visible:ring-ring"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-medium uppercase tracking-widest text-xs">
                          E-mail
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            className="bg-background border-border rounded-none h-12 focus-visible:ring-ring"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-medium uppercase tracking-widest text-xs">
                          Telefone
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="bg-background border-border rounded-none h-12 focus-visible:ring-ring"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-medium uppercase tracking-widest text-xs">
                        Tipo de Projeto
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background border-border rounded-none h-12 focus-visible:ring-ring">
                            <SelectValue placeholder="Selecione..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="residencial">Residencial</SelectItem>
                          <SelectItem value="comercial">Comercial</SelectItem>
                          <SelectItem value="corporativo">Corporativo</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-medium uppercase tracking-widest text-xs">
                        Mensagem
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          className="bg-background border-border rounded-none min-h-[120px] focus-visible:ring-ring resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none h-14 uppercase tracking-widest text-sm transition-colors"
                >
                  Enviar Solicitação
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
