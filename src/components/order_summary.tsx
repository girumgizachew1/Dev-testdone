import type { CartItem, ListResult } from 'swell-js';

import { getPrice } from '@/utils/product';

import OrderSummaryItem from './order_summary_item';

export default function OrderSummary({
  items,
  discount_total,
  sub_total,
  grand_total,
  tax_total,
  promotions,
}: {
  items: Array<CartItem>;
  discount_total: number;
  total: number;
  sub_total: number;
  tax_total: number;
  promotions: ListResult<any>;
  grand_total: number;
}) {
  return (
    <div className="lg:py-21 relative col-span-full flex flex-col bg-custom-100 py-6 pl-8 pr-4 sm:py-12  lg:col-span-3">
      <h2 className="text-gray-800 font-semibold">Order summary</h2>

      <div className="relative max-w-md">
        <ul className="space-y-5">
          {items.map((e: any, key) => (
            <OrderSummaryItem key={key} {...e} />
          ))}
        </ul>
        <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
        <div className="space-y-2">
          <hr />
          <div className="flex gap-2">
            <input
              type="text"
              name="mail"
              className=" h-9 w-full rounded border px-2 text-xs placeholder:text-zinc-500 focus:border-gray-500 focus:outline-none"
              placeholder="Gift Card/Discount code"
            />
            <button
              type="button"
              className=" rounded bg-custom-200 px-5 py-2 text-sm font-medium text-white hover:bg-custom-200 "
            >
              Apply
            </button>
          </div>
          <hr className="pb-2" />
        </div>
        <div className="space-y-4">
         <p className="flex justify-between text-sm  text-black">
            <span>Discount</span>
            <span>({getPrice(discount_total, 'AUD')})</span>
          </p>
           <p className="flex justify-between text-sm  text-black">
            <span>Subtotal</span>
            <span>{getPrice(sub_total, 'AUD')}</span>
          </p>
          <p className="flex justify-between text-sm  text-black">
            <span>Shipping</span>
            <span className="text-xs font-light">—</span>
          </p>
          
          <hr />

          {promotions.count > 0 &&
            promotions.results.length > 0 &&
            promotions.results.map((promotion) => (
              <div
                key={promotion.id}
                className="relative inline-flex  rounded-md bg-gray-200 p-2 text-sm text-black"
              >
                <span className="text-xs">{promotion.name}</span>
                {/* <span className="text-xs"></span> */}
              </div>
            ))}
          <hr />
          <div className="flex items-center justify-between text-lg font-bold text-black">
            <div>
              Total
              <span className="block text-xs font-light">
                including {getPrice(tax_total, 'AUD')} in taxes
              </span>
            </div>
            <span>{getPrice(grand_total, 'AUD')}</span>
          </div>
        </div>
      </div>

    </div>
  );
}
