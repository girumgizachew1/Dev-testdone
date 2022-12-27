import type { Product, ProductVariant } from 'swell-js';

import { getPrice } from '@/utils/product';
import { useSelector} from 'react-redux';

type State = {
  shipmentOptions: {
    [productId: string]: {
      shipmentType: string;
    };
  };
  // other properties and methods
};


export default function OrderSummaryItem({length,  product,  price, variant, index,}: { item: object; product: Product;variant: ProductVariant; price: number;  length: number; index: number;}) {
  const id= product.id
  const shipmentOptions = useSelector((state: State) => state.shipmentOptions[id]?.shipmentType);

  
  return (
    <div>
      <div className='text-base font-semibold my-2 flex flex-row justify-between' > 
          <div>Delivery {index} of {length}</div>
          <div>{shipmentOptions}</div>

      </div>
    <li className="flex items-center justify-between">
      
      <div className="inline-flex items-center">
        <img
          src={
            (product.images && product.images[0]?.file?.url) ??
            'https://londiniumespresso.com/store/image/cache/catalog/all-machines/londinium-R24-2021-800x800.jpg'
          }
          alt=""
          className="h-16 w-16 rounded-md"
        />
        <div className="ml-3">
          <p className="text-base font-semibold text-gray-800">{product.name}</p>
          {variant?.name && (
            <p className="text-sm font-medium text-gray-800 text-opacity-80">
              {variant.name}
            </p>
          )}
        </div>
      </div>
      <p className="text-sm font-semibold text-black">
        {getPrice(price, 'AUD')}
      </p>
    </li>
    </div>
  );
}
