// ! Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FC, useState } from 'react';

interface Props {
	images: string[];
	name: string;
}

const ProductSwiper: FC<Props> = ({ images, name }) => {
	const [thumbsSwiper, setThumbsSwiper]: any = useState<typeof Swiper | null>(
		null
	);

	const Images = () => {
		return (
			<>
				{images.map((image: string, i: number) => (
					<SwiperSlide key={i}>
						<img src={image} alt={`${name}-gallery-${i}`} />
					</SwiperSlide>
				))}
			</>
		);
	};

	return (
		<>
			<Swiper
				loop={true}
				spaceBetween={10}
				navigation={true}
				thumbs={{
					swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
				}}
				modules={[FreeMode, Navigation, Thumbs]}
				className='mySwiper2'
			>
				{images.map((image: string, i: number) => (
					<SwiperSlide key={i}>
						<img src={image} alt={`${name}-gallery-${i}`} />
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				loop={true}
				spaceBetween={10}
				slidesPerView={6}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className='mySwiper'
			>
				{images.map((image: string, i: number) => (
					<SwiperSlide key={i}>
						<img src={image} alt={`${name}-gallery-${i}`} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default ProductSwiper;