"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { AlertDialog } from '@radix-ui/react-alert-dialog';
import FileUpload from '@/components/global/file-upload';
import { zodResolver } from '@hookform/resolvers/zod';
import React,{ useEffect, useState } from 'react';
import { useToast } from '../../ui/use-toast';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Agency } from '@prisma/client';
import * as z from "zod";

type Props = {
    data?: Partial<Agency>
}

const FormSchema = z.object({
    name: z.string().min(2, {message: "agency name must be atleast 2 chars!"}),
    companyPhone: z.string().min(1),
    companyEmail: z.string().min(1),
    agencyLogo: z.string().min(1),
    country: z.string().min(1),
    zipCode: z.string().min(1),
    adress: z.string().min(1),
    state: z.string().min(1),
    city: z.string().min(1),
    whiteLabel: z.boolean(),
})

const AgencyDetails = ({ data }: Props) => {
    const [deletingAgency, setDeletingAgency] = useState(false)
    const { toast } = useToast();
    const router = useRouter();

    const form = useForm<z.infer<typeof FormSchema>>({
        mode:"onChange",
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: data?.name,
            companyEmail: data?.companyEmail,
            companyPhone: data?.companyPhone,
            whiteLabel: data?.whiteLabel || false,
            adress: data?.address,
            city: data?.city,
            zipCode: data?.zipCode,
            state: data?.state,
            country: data?.country,
            agencyLogo: data?.agencyLogo,
        },
    })
    const isLoading = form.formState.isSubmitting

    useEffect(() => {
        if(data){
            form.reset(data)
        }
    }, [data])

    const handleSubmit = async () => {}

    return (
        <AlertDialog>
            <Card className='w-full'>
                <CardHeader>
                    <CardTitle>Agency Information</CardTitle>
                    <CardDescription>
                        Lets get started by setting up your agency. This information will be used to create your agency account.
                    </CardDescription>
                </CardHeader>
                <CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form 
                            onSubmit={form.handleSubmit(handleSubmit)}
                            className='space-y-4'
                            >
                                <FormField 
                                disabled={isLoading} 
                                control={form.control} 
                                name="agencyLogo" 
                                render={({field})=>(
                                <FormItem>
                                    <FormLabel>Agency Logo</FormLabel>
                                    <FormControl>
                                        <FileUpload
                                        apiEndpoint='agencyLogo'
                                        onChange={field.onChange}
                                        value={field.value}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                    )}>
                                </FormField>
                            </form>
                        </Form>
                    </CardContent>
                </CardHeader>
            </Card>
        </AlertDialog>
    )
}

export default AgencyDetails;