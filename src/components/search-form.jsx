"use client";

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { searchFormSchema } from '@/app/lib/validators';

const SearchForm = () => {
    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(searchFormSchema),
        defaultValues: {
            teacherName: "",
            address: ""
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values) {
        console.log(values);
    }

    return (
        <div>Search Form
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="teacherName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Student Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="name of student" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="address of student" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Search</Button>
                        <Button type="clear">Clear All</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
};

export default SearchForm;