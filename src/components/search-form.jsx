"use client";

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
import { searchFormSchema } from '@/app/lib/validators';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

const SearchForm = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("")
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
        setAddress(values.address);
    }

    const clearAllHandler = (values) => {
        setAddress("");
        values = {};
        console.log("Reached here")
    }

    const [ t, i18n ] = useTranslation("global");

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
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">{t('searchForm.search')}<FontAwesomeIcon icon={ faMagnifyingGlass } /></Button>
                        <Button type="reset" onClick={clearAllHandler}>{t('searchForm.clearAll')}<FontAwesomeIcon icon={ faXmark } /></Button>
                    </form>
                </Form>
            </div>
        </div>
    )
};

export default SearchForm;