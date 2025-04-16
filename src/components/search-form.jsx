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
    FormLabel
} from "@/components/ui/form";
import { searchFormSchema } from '@/app/lib/validators';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import DateSelector from './date-selector';

const SearchForm = () => {
    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(searchFormSchema),
        defaultValues: {
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values) {

    }

    const clearAllHandler = (values) => {
        values = {};
    }

    const [t, i18n] = useTranslation("global");
    return (
        <div>Search Form
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="dob"
                            render={() => (
                                <FormItem>
                                    <FormLabel> 
                                        {t("searchForm.dob")}
                                    </FormLabel>
                                    <FormControl>
                                        <DateSelector />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button className="mr-2" type="submit">{t('searchForm.search')}<FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
                        <Button className="mr-2" type="reset" onClick={clearAllHandler}>{t('searchForm.clearAll')}<FontAwesomeIcon icon={faXmark} /></Button>
                    </form>
                </Form>
            </div>
        </div>
    )
};

export default SearchForm;