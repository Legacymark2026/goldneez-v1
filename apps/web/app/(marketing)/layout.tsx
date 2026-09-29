import { CustomCursor } from "@/components/layout/custom-cursor";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <CustomCursor />
            <main className="flex-1">{children}</main>
        </div>
    );
}
