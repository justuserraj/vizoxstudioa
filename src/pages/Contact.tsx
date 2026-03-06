import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Twitter, Instagram, Linkedin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import { showSuccess } from '@/utils/toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  description: z.string().min(10, 'Please provide more details about your project'),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      service: '',
      budget: '',
      description: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    showSuccess('Message sent successfully! We will get back to you soon.');
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32">
        <section className="px-6 mb-24">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Let's Talk" subtitle="Contact Us" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="glass p-8 md:p-12 rounded-3xl"
              >
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} className="bg-background/50" />
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} className="bg-background/50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-background/50">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="design">Design</SelectItem>
                                <SelectItem value="development">Development</SelectItem>
                                <SelectItem value="marketing">Marketing</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Budget</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-background/50">
                                  <SelectValue placeholder="Select budget" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="5k-10k">$5k - $10k</SelectItem>
                                <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                                <SelectItem value="25k+">$25k+</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Details</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project..." 
                              className="bg-background/50 min-h-[150px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full py-6 text-lg font-bold btn-glow">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="glass p-8 rounded-3xl flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">Email Us</h3>
                    <p className="text-foreground/60 mb-4">Our team is here to help you with any questions.</p>
                    <a href="mailto:hello@vizox.studio" className="text-primary font-medium hover:underline">
                      hello@vizox.studio
                    </a>
                  </div>
                </div>

                <div className="glass p-8 rounded-3xl flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                    <MessageSquare size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">WhatsApp</h3>
                    <p className="text-foreground/60 mb-4">Quick chat for urgent inquiries.</p>
                    <a href="#" className="text-green-500 font-medium hover:underline">
                      +1 (555) 000-0000
                    </a>
                  </div>
                </div>

                <div className="glass p-8 rounded-3xl">
                  <h3 className="text-xl font-serif font-bold mb-6">Follow Us</h3>
                  <div className="flex gap-6">
                    <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-all">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-all">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-all">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;