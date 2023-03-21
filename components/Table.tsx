import { Product } from "@stripe/firestore-stripe-payments";

interface Props {
  products: Product[]
}


const Table = ({products}: Props) =>{
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly Price</td>
          {products.map((product)=> (
            <td key={product.id} className="tableDataFeature">USD {product.prices[0].unit_amount! / 100}</td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Video Quality</td>
          {products.map((product)=> (
            <td key={product.id} className="tableDataFeature">{product.metadata.videoQuality}</td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

export default Table;