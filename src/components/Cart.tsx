"use client"

import { ShoppingCart } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { Separator } from "./ui/separator"
import { formatPrice } from "../lib/utils"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import Image from "next/image"

const Cart = () => {
  const itemCount = 0

  const fee = 1
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCart
          aria-hidden
          className="size-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          0
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart (0)</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">
              {/** TODO: cart logic */}
              Cart Items
            </div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 pr-6">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Transacton Free</span>
                  <span>{formatPrice(fee)}</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Total</span>
                  <span>{formatPrice(fee)}</span>
                </div>
              </div>

              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    href="/cart"
                    className={buttonVariants({ className: "w-full" })}
                  >
                    Continue to Checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div
              aria-hidden
              className="relative mb-4 size-60 text-muted-foreground"
            >
              <Image
                src="/hippo-empty-cart.png"
                fill
                alt="empty shopping cart"
              />
            </div>
            <div className="text-xl font-semibold">Your Cart is Empty</div>
            <SheetTrigger asChild>
              <Link
                href="/products"
                className={buttonVariants({
                  variant: "link",
                  size: "sm",
                  className: "text-sm text-muted-foreground",
                })}
              >Add items to your cart to Checkout</Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default Cart
