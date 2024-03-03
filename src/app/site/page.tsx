import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { pricing } from "@/lib/constant"
import { Check } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
import clsx from "clsx";


export default async function Home() {
  return (
    <>
      <section className="h-full w-full md:pt-44 mt-[-70px] relative flex items-center justify-center flex-col">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="z-10 relative text-center">
          <h1 className="text-5xl md:text-9xl font-bold"
            style={{
              backgroundImage: 'linear-gradient(to right, #ff0066, #ff99cc, #ffffff)',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
            >
              candybay
            </h1>
          </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t dark:from-background"></div>
      </section>
      <section className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-60px]">
        <h2 className="text-4xl text-center">Choose your plan !</h2>
        <p className="text-muted-foreground text-center">
          Our princing plans are tailored to meet your needs. <br />Get started for free and upgrade as you grow.
        </p>
        <div className="flex justify-center gap-4 flex-wrap mt-6">
          {pricing.map((card)=> (
            <Card
              key={card.title}
              className={clsx('w-[300px] flex flex-col justify-between',
              {"border-2 border-primary":card.title===""}
              )}>
                <CardHeader>
                  <CardTitle className={clsx('', {'text-muted-foreground': card.title !== "Unlimited",
                })}
                >{card.title}
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-4xl font-bold">{card.price}</span>
                  <span className="text-muted-foreground">/m</span>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4">
                  <div>
                    {card.features.map((feature) => (
                    <div 
                      key={feature}
                      className="flex gap-2 items-center">
                    <Check className="text-muted-foreground" />
                    <p>{feature}</p>
                  </div>
                  ))}
                  </div>
                  <Link
                  href={`/agency?plan=${card.priceId}`}
                  className={clsx(
                    'w-full text-center bg-primary p-2 rounded-md',
                    { '!bg-muted-foreground': card.title !== "Unlimited Creations"}
                    )}>
                      Get Starded
                    </Link>
                </CardFooter>
              </Card>
          ))}
        </div>
      </section>
    </>
  );
}
