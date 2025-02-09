'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    message: Yup.string().required('Message is required'),
});

export default function Forum() {
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            message: '',
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
            // Handle form submission here
        },
    });

    return (
        <div className="min-h-fit bg-black bg-opacity-20 p-5">
            <form
                onSubmit={formik.handleSubmit}
                className="mx-auto max-w-2xl  flex flex-col gap-6"
            >
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        {...formik.getFieldProps('name')}
                        className={`mt-1 block w-full rounded-sm border bg-transparent px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-white/50
              ${
                  formik.touched.name && formik.errors.name
                      ? 'border-red-500'
                      : 'border-gray-600'
              }`}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <div className="mt-1 text-sm text-red-500">
                            {typeof formik.errors.name === 'string' &&
                                formik.errors.name}
                        </div>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-white"
                    >
                        Phone
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        {...formik.getFieldProps('phone')}
                        className={`mt-1 block w-full rounded-sm border bg-transparent px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-white/50
              ${
                  formik.touched.phone && formik.errors.phone
                      ? 'border-red-500'
                      : 'border-gray-600'
              }`}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                        <div className="mt-1 text-sm text-red-500">
                            {typeof formik.errors.phone === 'string' &&
                                formik.errors.phone}
                        </div>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        {...formik.getFieldProps('email')}
                        className={`mt-1 block w-full rounded-sm border bg-transparent px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-white/50
              ${
                  formik.touched.email && formik.errors.email
                      ? 'border-red-500'
                      : 'border-gray-600'
              }`}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className="mt-1 text-sm text-red-500">
                            {typeof formik.errors.email === 'string' &&
                                formik.errors.email}
                        </div>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-white"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        {...formik.getFieldProps('message')}
                        rows={6}
                        className={`mt-1 block w-full rounded-sm border bg-transparent px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-white/50
              ${
                  formik.touched.message && formik.errors.message
                      ? 'border-red-500'
                      : 'border-gray-600'
              }`}
                    />
                    {formik.touched.message && formik.errors.message && (
                        <div className="mt-1 text-sm text-red-500">
                            {typeof formik.errors.message === 'string' &&
                                formik.errors.message}
                        </div>
                    )}
                </div>
                <motion.button
                    type="submit"
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: '#606887',
                        color: '#ffffff',
                        boxShadow: '0px 4px 15px rgba(168, 175, 204, 0.3)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="w-full text-[16px] font-normal py-[13px] text-center px-auto border border-white bg-transparent text-white overflow-hidden relative mt-6"
                >
                    Contact us{' '}
                </motion.button>
            </form>
        </div>
    );
}
