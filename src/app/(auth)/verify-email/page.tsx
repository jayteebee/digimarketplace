import Image from "next/image"

interface PageProps {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}

const VerifyEmaulPage = ({searchParams}: PageProps) => {
const token = searchParams.token


    return (
        <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                {token && typeof token === "string" ? (
                    <div className="grid gap-6">

                    </div>
                ) : (
                    <div className="flex h-full flex-col items-center justify-center space-y-1">
                        <div className="relative mb-4 h-16 w-16 text-muted-foreground">
                            <Image src="hippo-email-sent.png" fill alt="hippo email sent image" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default VerifyEmaulPage