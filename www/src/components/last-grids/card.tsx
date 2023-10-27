import {
  AspectRatio,
  Box,
  Image,
  Skeleton,
  Stack,
  Text,
  Tooltip,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react'
import * as React from 'react'
import { Rating } from './rating'

interface MangaProps {
  title: string
  ratting: number
  image: string
  type_book: string
}
//import { FavouriteButton } from './FavouriteButton'
//import { PriceTag } from './PriceTag'
//import { Product } from './_data'

export const Card = ({ title, image, ratting, type_book }: MangaProps) => {
  return (
    <Stack spacing={useBreakpointValue({ base: '4', md: '5' })}>
      <Box position="relative">
        <AspectRatio
          ratio={4 / 3}
          _before={{
            content: '\'\'',
            display: 'block',
            height: '0px',
            paddingBottom: '133.333%'
          }}
        >
          <Image
            src={image}
            alt={title}
            draggable="false"
            cursor="pointer"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })}
          />
        </AspectRatio>
        <Text
          position="absolute"
          top="4"
          right="4"
          bg={'purple.700'}
          p={2}
          rounded={'base'}
          fontWeight={'bold'}
          fontSize={'10px'}
          cursor={'pointer'}
        >
          {type_book}
        </Text>
      </Box>
      <Stack>
        <Stack spacing="1">
         <Tooltip hasArrow label={title} bg='gray.300' color='black' w={'fit-content'}>
          <Text isTruncated fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
            {title}
          </Text>
         </Tooltip>
          <Rating defaultValue={ratting} />
        </Stack>
      </Stack>
    </Stack>
  )
}
