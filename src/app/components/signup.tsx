'use client';

import { Button } from '@/components/ui/button';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { CircleCheck, Rocket } from 'lucide-react';
import { JSX, useEffect, useState }  from 'react';
import * as motion from "motion/react-client";
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const id = 'signup';

const Signup = ():JSX.Element => {
    const [requestPending, setRequestPending] = useState(false);
    const [requestSuccessful, setRequestSuccessful] = useState(false);
    const [rotate, setRotate] = useState(-720);

    useEffect(() => {
        if (requestSuccessful && rotate < 720) {
            const updatedAngle = rotate + 1;
            setRotate(updatedAngle);
        }
    }, [requestSuccessful, rotate]);

    const formSchema = z.object({
        name: z.string().min(1, { message: "Name is required" }),
        email: z.string().email({ message: "Invalid email address" }),
        useCase: z.string().min(10, { message: "Use case requires at least ten characters" }).max(500, { message: "Use case must be less than 500 characters" })
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    });
      
    const onSubmit = async (data: z.infer<typeof formSchema>):Promise<void> => {
        setRequestPending(true);
        const body = {
            records: [
                {
                    fields: {
                        Name: data.name,
                        Email: data.email,
                        UseCase: data.useCase
                    }
                }
            ]
        };

        const response = await fetch(`${process.env.NEXT_PUBLIC_AIRTABLE_BASE_API_URL}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_PAT}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        setRequestSuccessful(response.ok);
        setRequestPending(false);
    };

    if (requestPending) {
        return (
            <div className='flex justify-center mt-10'>
                <Skeleton className="w-[90%] lg:w-[46%] h-[495px] mb-5 rounded-xl ease-in-out" />
            </div>
        );
    }

    if (requestSuccessful) {
        return (
            <div className='flex flex-col items-center'>
                <p className='text-3xl md:text-5xl my-10'>{`We'll be in touch!`}</p>
                <motion.div className='ease-in-out' animate={{ x: 0, y: 0, rotate }} transition={{ type: "spring" }}>
                    <CircleCheck size={300} stroke='green' />
                </motion.div>
            </div>
        );
    }

    return (
        <div id={id} className='flex flex-col items-center'>
            <p className='text-2xl md:text-3xl lg:text-5xl my-10'>Sign up for early product launch!</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[90%] lg:w-[46%]">
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
                                    Tell us a little bit about how Automind System can help you.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className='mb-5 bg-automind-red text-white'>
                        Submit
                        <Rocket />
                    </Button>
                </form>
            </Form>
        </div>
    )
};

export default Signup;
