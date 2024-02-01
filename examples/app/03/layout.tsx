import React from 'react';

const title = 'Base Example';

export const metadata = {
    title,
    openGraph: {
        title,
    },
};

export default async function Layout({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {

    return (<div>{children}</div>);
}