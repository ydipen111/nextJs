import { Metadata } from "next";

type props = {
  params: {
    productid: string;
  }
}

export const generateMetadata = ({ params }: props): Metadata => {
  return {
    title: `Product ${params.productid} `,
  }
}

export default function page({ params, }: props) {
  return (
    <div>
      <h1>Product {params.productid} page</h1>

    </div>
  )
}
