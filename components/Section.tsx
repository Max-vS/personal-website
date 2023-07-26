import React from "react";
import {cva, VariantProps} from "class-variance-authority";

const styles = cva("relative p-8 sm:py-16 lg:py-32", {
    variants: {
        background: {
            powder: "bg-secondary-powder",
            isa: "bg-secondary-isa"
        },
    },
    defaultVariants: {
        background: "powder",
    },
});

export interface Props extends VariantProps<typeof styles> {
    children: React.ReactNode,
    className?: string,
    backgroundImage?: string,
}

export default function Section({ children, background, className }: Props) {
    return (
        <section className={styles({ background, className: className })}>
            <div className="container mx-auto">{children}</div>
        </section>
    );
}

