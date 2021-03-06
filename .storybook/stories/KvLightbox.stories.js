import { boolean } from '@storybook/addon-knobs';
import KvLightbox from '@/components/Kv/KvLightbox';
import KvButton from '@/components/Kv/KvButton';

const loremIpsum = `
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis nunc sed id semper risus in hendrerit. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Interdum varius sit amet mattis vulputate enim. Maecenas pharetra convallis posuere morbi leo urna molestie. Duis ut diam quam nulla porttitor. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Elit pellentesque habitant morbi tristique senectus et netus. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Non quam lacus suspendisse faucibus interdum posuere lorem. Magnis dis parturient montes nascetur ridiculus. Et tortor consequat id porta nibh venenatis cras sed felis. Dui ut ornare lectus sit amet est placerat. Eu non diam phasellus vestibulum lorem. Dignissim convallis aenean et tortor at.
	</p>
	<p>
		Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat. Sed odio morbi quis commodo odio aenean. Et tortor at risus viverra. Bibendum enim facilisis gravida neque. Ut tellus elementum sagittis vitae et leo duis. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum. Et malesuada fames ac turpis egestas integer eget aliquet. In hac habitasse platea dictumst quisque. Dignissim cras tincidunt lobortis feugiat. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Quam nulla porttitor massa id. Ac tortor dignissim convallis aenean et tortor at risus. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Vitae aliquet nec ullamcorper sit amet. Ornare arcu odio ut sem nulla. Viverra orci sagittis eu volutpat odio. Ut venenatis tellus in metus. Amet justo donec enim diam.
	</p>
	<p>
		Amet risus nullam eget felis eget nunc. Mollis nunc sed id semper risus. Et magnis dis parturient montes. Ipsum dolor sit amet consectetur adipiscing elit. Nam aliquam sem et tortor consequat id porta nibh venenatis. Nibh venenatis cras sed felis eget velit. Volutpat blandit aliquam etiam erat. Mauris augue neque gravida in fermentum et sollicitudin. Tempor nec feugiat nisl pretium. Faucibus pulvinar elementum integer enim. Bibendum neque egestas congue quisque egestas diam. Nunc sed velit dignissim sodales ut eu sem integer vitae. Odio ut enim blandit volutpat maecenas volutpat blandit. In mollis nunc sed id. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
	</p>
	<p>
		Habitant morbi tristique senectus et netus et. Nullam eget felis eget nunc lobortis mattis aliquam. Nunc consequat interdum varius sit amet mattis vulputate enim. Mattis vulputate enim nulla aliquet porttitor. Scelerisque purus semper eget duis at tellus. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Facilisi cras fermentum odio eu feugiat pretium. Elementum sagittis vitae et leo. Duis ut diam quam nulla porttitor. Id leo in vitae turpis massa. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Sed augue lacus viverra vitae congue. Semper eget duis at tellus at urna condimentum. Sagittis aliquam malesuada bibendum arcu. Etiam dignissim diam quis enim lobortis scelerisque. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Dignissim enim sit amet venenatis urna cursus eget.
	</p>
`;

export default {
	title: 'Kv/KvLightbox',
	component: KvLightbox,
};

export const Default = () => ({
	components: { KvLightbox, KvButton },
	data: () => ({
		lightboxVisible: false,
	}),
	methods: {
		showLightbox() {
			this.lightboxVisible = true;
		},
		hideLightbox() {
			this.lightboxVisible = false;
		}
	},
	template: `
		<div>
			<kv-button @click.native.prevent="showLightbox">
				Show Lightbox
			</kv-button>

			<kv-lightbox
				:visible="lightboxVisible"
				@lightbox-closed="hideLightbox"
			>
				${loremIpsum}
			</kv-lightbox>
		</div>
	`,
});

export const TitleSlotControlsSlot = () => ({
	components: { KvLightbox, KvButton },
	data: () => ({
		lightboxVisible: false,
	}),
	methods: {
		showLightbox() {
			this.lightboxVisible = true;
		},
		hideLightbox() {
			this.lightboxVisible = false;
		}
	},
	template: `
		<div>
			<kv-button @click.native.prevent="showLightbox">
				Show Lightbox - Use Header and Controls Slot
			</kv-button>

			<kv-lightbox
				:visible="lightboxVisible"
				@lightbox-closed="hideLightbox"
				title="Title"
			>
				${loremIpsum}
				<template slot="controls">
					<kv-button>Button 1</kv-button>
					<kv-button>Button 2</kv-button>
				</template>
			</kv-lightbox>
		</div>
	`,
});

export const Inverted = () => ({
	components: { KvLightbox, KvButton },
	data: () => ({
		lightboxVisible: false,
	}),
	methods: {
		showLightbox() {
			this.lightboxVisible = true;
		},
		hideLightbox() {
			this.lightboxVisible = false;
		}
	},
	template: `
		<div>
			<kv-button @click.native.prevent="showLightbox">
				Show Lightbox Inverted
			</kv-button>

			<kv-lightbox
				:visible="lightboxVisible"
				:inverted="true"
				@lightbox-closed="hideLightbox"
				title="Title"
			>
				${loremIpsum}
				<template slot="controls">Controls Here</template>
			</kv-lightbox>

			<kv-lightbox
				:visible="false"
				:inverted="true"
				@lightbox-closed="hideLightbox"
				title="Title"
			>
				${loremIpsum}
				<template slot="controls">Controls Here</template>
			</kv-lightbox>
		</div>
	`,
});

export const CustomTitleColor = () => ({
	components: { KvLightbox, KvButton },
	data: () => ({
		lightboxVisible: false,
	}),
	methods: {
		showLightbox() {
			this.lightboxVisible = true;
		},
		hideLightbox() {
			this.lightboxVisible = false;
		}
	},
	template: `
		<div>
			<kv-button @click.native.prevent="showLightbox">
				Show Lightbox Custom Title Color
			</kv-button>

			<kv-lightbox
				:visible="lightboxVisible"
				@lightbox-closed="hideLightbox"
				title="Custom Title Color"
				style="--kv-lightbox-title-color: blue"
			>
				${loremIpsum}
			</kv-lightbox>
		</div>
	`,
});

export const FullWidth = () => ({
	components: { KvLightbox, KvButton },
	props: {
		fullWidth: {
			default: boolean('fullWidth', true)
		},
	},
	data: () => ({
		lightboxVisible: false,
	}),
	methods: {
		showLightbox() {
			this.lightboxVisible = true;
		},
		hideLightbox() {
			this.lightboxVisible = false;
		}
	},
	template: `
		<div>
			<kv-button @click.native.prevent="showLightbox">
				Show Lightbox Full Width
			</kv-button>

			<kv-lightbox
				:visible="lightboxVisible"
				:full-width="fullWidth"
				@lightbox-closed="hideLightbox"
				title="Title"
			>
				This is small content, but the lightbox takes all the space it can.
			</kv-lightbox>
		</div>
	`,
});


export const NoPadding = () => ({
	components: { KvLightbox, KvButton },
	props: {
		noPaddingTop: {
			default: boolean('noPaddingTop', true)
		},
		noPaddingSides: {
			default: boolean('noPaddingSides', true)
		},
		noPaddingBottom: {
			default: boolean('noPaddingBottom', true)
		}
	},
	data: () => ({
		lightboxVisible: false,
	}),
	methods: {
		showLightbox() {
			this.lightboxVisible = true;
		},
		hideLightbox() {
			this.lightboxVisible = false;
		}
	},
	template: `
		<div>
			<kv-button @click.native.prevent="showLightbox">
				Show Lightbox no padding
			</kv-button>

			<kv-lightbox
				:visible="lightboxVisible"
				:no-padding-top="noPaddingTop"
				:no-padding-bottom="noPaddingBottom"
				:no-padding-sides="noPaddingSides"
				@lightbox-closed="hideLightbox"
				title="Title"
			>
				${loremIpsum}
			</kv-lightbox>
		</div>
	`,
});
