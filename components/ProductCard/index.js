import { useTheme, Text, Button } from '@geist-ui/react';
import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { Heart } from '@geist-ui/react-icons';




export default function ProductCard({
  showPrice = true,
  data,
  width = 200,
  height = 200,
  ...props
}) {

  const { palette } = useTheme()
  return <Link href={`/detail/${data?.id}`} passHref={false} width='100%' style={{ display: "flex", width: width, margin: 10, justifyContent: "center", alignItems: "center" }} >
    <div style={{ border: "none", position: "relative", cursor: "pointer", maxWidth: width }} width="100%" >
      <div style={{ position: "absolute", zIndex: 2, top: 5, right: 0 }}>
        <Button onClick={(e) => { e.preventDefault() }} type='abort' iconRight={<Heart />} px={0.6} auto />
      </div>
      <div style={{ width: width, height: height, position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Image objectFit='cover' alt='-' src={data?.images[0]?.url} layout='fill' />
      </div>
      <div style={{ padding: 10, paddingTop: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Text style={{ width: '100%', textAlign: "center", whiteSpace: "nowrap", overflow: "hidden", textOverflow: 'ellipsis', margin: 0 }} truncate h6 mb={0}>{data?.brand?.label}</Text>
        <Text style={{ maxWidth: '100%', fontWeight: "300", height: 50, textAlign: "center", overflow: "hidden", textOverflow: 'ellipsis', }} truncate margin={0}>{data?.label}</Text>
      </div>
    </div>
  </Link>

}

