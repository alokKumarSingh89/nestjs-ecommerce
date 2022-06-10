import { Box, Divider, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
interface IProps {
  id: string;
  name: string;
  slug: string;
  price: number;
  images: {
    id: string;
    url: string;
  };
}
export default function ProductCard(props: IProps) {
  return (
    <Link href={`/product/${props.slug}`} passHref>
      <Box
        as='a'
        border='1px'
        borderColor='gray.200'
        px='10'
        py='5'
        rounded='lg'
        boxShadow='lg'
        bgColor='white'
        transition='ease 0.2s'
        _hover={{
          boxShadow: 'xl',
          transform: 'scale(1.02)',
        }}
      >
        <Image src={props.images[0]?.url} alt={props.name} />
        <Divider my='3' />
        <Box>
          <Text fontWeight='bold' textColor='purple' fontSize='lg'>
            {props.name}
          </Text>
          <Text textColor='gray.700'>€{props.price / 100}</Text>
        </Box>
      </Box>
    </Link>
  );
}
