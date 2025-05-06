'use client';

import { Button } from '@/components/ui/button';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { Rocket } from 'lucide-react';
import { JSX }  from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';


const Signup = ():JSX.Element => {
    const formSchema = z.object({
        name: z.string().min(1, { message: "Name is required" }),
        email: z.string().email({ message: "Invalid email address" }),
        useCase: z.string().min(10, { message: "Use case requires at least ten characters" }).max(500, { message: "Use case must be less than 500 characters" })
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    });
      
    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        console.log(data);
        // Here you can send the data to your server or API
    };

    return (
        <div className='flex flex-col items-center'>
            <p className='text-5xl my-10'>Sign up for early product launch!</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[46%]">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {... field} />
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
                                    <Input type='email' {... field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="useCase"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Use Case</FormLabel>
                                <FormControl>
                                    <Textarea {... field} />
                                </FormControl>
                                <FormDescription>
                                    Tell us a little bit about how AutoMind System can help you.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className='mb-5 bg-cyan-600 text-white'>
                        Submit
                        <Rocket />
                    </Button>
                </form>
            </Form>
        </div>
    )
};

export default Signup;
