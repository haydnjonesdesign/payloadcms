'use client'
import Image from "next/image";

export default function Content( {data} ) {
  const { title } = data
    return (<div>
        <h1 className="text-purple-500 text-xl">{title}</h1>
    </div>
  );
}
