<template>
	<div class="">
		<!-- Selection Group -->
		<div>
			<h2 class="text-3xl text-center text-white">What kind of vehicle do you have?</h2>
			<!-- Button Group -->
			<div class="flex justify-center max-w-4xl gap-2 mx-auto mt-8 md:gap-4">
				<div v-for="(vehicleType, index) in vehicleTypes"
					 :key="index"
					 @click="updateCurrentSelection(index)"
					 class="bg-blue py-8 flex flex-col rounded items-center hover:bg-opacity-70 cursor-pointer transition-all min-w-[33%]">
					<font-awesome-icon class="text-3xl sm:text-6xl md:text-8xl"
									   :icon="[vehicleType.icon.package, vehicleType.icon.name]" />
					<div class="mt-4 text-sm font-bold sm:text-base md:text-lg">{{ vehicleType.title }}</div>
				</div>
			</div>
		</div>

		<!-- Package Group -->
		<div class="flex flex-wrap justify-center gap-4 mt-4">
			<div class="bg-blue-light p-8 rounded text-center min-w-[18rem]"
				 v-for="(vehiclePackage, packageIndex) in vehicleTypes[currentSelection].packages"
				 :key="packageIndex">
				<div class="">
					<h2 class="text-xl">{{ vehiclePackage.title }}</h2>
					<div class="mt-4">
						<span v-if="currentSelection !== 2"
							  class="text-4xl font-black">${{
							  	vehicleTypes[currentSelection].packages[packageIndex].addonPrice.reduce((a, b) => a + b, 0) +
							  	vehicleTypes[currentSelection].packages[packageIndex].basePrice
							  }}</span>
						<div class="text-4xl font-black"
							 v-else> Inquire</div>
					</div>
					<h3 class="mt-4 text-2xl">Price by Quote</h3>
					<div class="mt-4 font-black">{{ vehiclePackage.eta }}</div>
					<ul class="mt-4 mb-4">
						<li v-for="(microservice, microserviceIndex) in vehiclePackage.microservices"
							:key="microserviceIndex">{{ microservice }}</li>
					</ul>
					<div v-if="currentSelection !== 2"
						 class="mt-4 text-3xl font-black">Addons</div>


					<div v-if="currentSelection !== 2"
						 class="mb-4 ">
						<div v-for="(addOn, index) in vehiclePackage.addOns"
							 :key="index">
							<input :id="addOn.id"
								   type="checkbox"
								   :value="addOn.price"
								   v-model="vehicleTypes[currentSelection].packages[packageIndex].addonPrice">
							<label class="ml-2"
								   :for="addOn.id">{{ addOn.title }}</label>
						</div>
					</div>
					<a :href="vehiclePackage.meetingLink"
					   target="_blank"
					   class="px-4 py-2 ml-2 bg-white rounded">Book</a>
				</div>
			</div>
		</div>

	</div>
	<!-- comment change -->
</template>
<script>
export default {
	data() {
		return {
			currentSelection: 0,
			// individual vehicle types object
			vehicleTypes: [
				// Sedan
				{
					title: 'Sedan',
					icon: {
						package: 'fas',
						name: 'car',
					},
					packages: [
						{
							title: 'Wash and Wax',
							eta: '1hr 30min',
							basePrice: 50,
							addonPrice: [],
							microservices: [
								'Hand Wash',
								'Wax',
								'Exterior Glass',
								'Tire Dressing',
								'Light Vacuuming',
								'Surface Wipe Down',
								'Clean Scent',
							],
							addOns: [
								{
									id: 'headlight-restoration',
									title: 'Headlight Restoration (+$70)',
									price: 70,
								},
								{
									id: 'pet-hair-removal',
									title: 'Pet Hair Removal (+$45)',
									price: 45,
								},
								{
									id: 'engine-bay-detail',
									title: 'Engine Bay Detail (+$50)',
									price: 50,
								},
								{
									id: 'floor-mat-shampoo',
									title: 'Floor Mat Shampoo (+$25)',
									price: 25,
								},
								{
									id: 'rain-x',
									title: 'Rain X (+$10)',
									price: 10,
								},
							],
							meetingLink: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2NcAlbIZjC5cjk6opT6Dd1hy9CzfHIb9ZANjhEZ81DxAOLAi_ryFFgGvWDPS1TH_WO9f_T2c59?gv=true'
						},
						{
							title: 'Maintenance Detail',
							eta: '2hr 30min',
							basePrice: 70,
							addonPrice: [],
							microservices: [
								'Hand Wash',
								'Tires and Rims Washed',
								'Wax',
								'Exterior Glass',
								'Tire Dressing',
								'Interior Glass',
								'Light Vacuuming',
								'Surface Wipe Down',
								'Surface Surface Protectant',
								'Leather Conditioning',
								'Clean Scent',
							],
							addOns: [
								{
									id: 'headlight-restoration',
									title: 'Headlight Restoration (+$70)',
									price: 70,
								},
								{
									id: 'pet-hair-removal',
									title: 'Pet Hair Removal (+$45)',
									price: 45,
								},
								{
									id: 'engine-bay-detail',
									title: 'Engine Bay Detail (+$50)',
									price: 50,
								},
								{
									id: 'floor-mat-shampoo',
									title: 'Floor Mat Shampoo (+$25)',
									price: 25,
								},
								{
									id: 'rain-x',
									title: 'Rain X (+$10)',
									price: 10,
								},
							],
							meetingLink: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2qVlFYcWLBVbjpyO5G28RC-9ecGZVLNczZXvwGIWGkxwHfZSoeEEiA9z7oggw5QqeUVpB_xy7z?gv=true',
						},
						{
							title: 'Premium Internal Detail',
							eta: '2hr 30min',
							basePrice: 110,
							addonPrice: [],
							microservices: [
								'Door Jambs',
								'Interior Glass',
								'Meticulous Vacuuming',
								'Surface Wipe Down',
								'Surface Protectant',
								'Leather Conditioning',
								'Fabric Shampooing',
								'Meticulous Cleaning',
								'Clean Scent'
							],
							addOns: [
								{
									id: 'headlight-restoration',
									title: 'Headlight Restoration (+$70)',
									price: 70,
								},
								{
									id: 'pet-hair-removal',
									title: 'Pet Hair Removal (+$45)',
									price: 45,
								},
								{
									id: 'engine-bay-detail',
									title: 'Engine Bay Detail (+$50)',
									price: 50,
								},
								{
									id: 'floor-mat-shampoo',
									title: 'Floor Mat Shampoo (+$25)',
									price: 25,
								},
								{
									id: 'rain-x',
									title: 'Rain X (+$10)',
									price: 10,
								},
							],
							meetingLink: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3mtwRvQ8emaQ5FTZN09CoqMTOTbQyQHI5SdAO1784X9ajcp2d6mpSc71NoqRvDQzvC-3_kDkxJ?gv=true',
						},
						{
							title: 'Premium Detail',
							eta: '4hr',
							basePrice: 180,
							addonPrice: [],
							microservices: [
								'Hand Wash',
								'Tires and Rims Washed',
								'Rim sealed and protected',
								'Paint decontamination',
								'Wax',
								'Exterior Glass',
								'Tire Dressing',
								'Other areas, including Gas Cap',
								'Dressing',
								'Door Jambs',
								'Interior Glass',
								'Meticulous Vacuuming',
								'Surface Wipe Down',
								'Surface Protectant',
								'Leather Conditioning',
								'Fabric Shampooing',
								'Meticulous Cleaning',
								'Clean Scent'
							],
							addOns: [
								{
									id: 'headlight-restoration',
									title: 'Headlight Restoration (+$70)',
									price: 70,
								},
								{
									id: 'pet-hair-removal',
									title: 'Pet Hair Removal (+$45)',
									price: 45,
								},
								{
									id: 'engine-bay-detail',
									title: 'Engine Bay Detail (+$50)',
									price: 50,
								},
								{
									id: 'floor-mat-shampoo',
									title: 'Floor Mat Shampoo (+$25)',
									price: 25,
								},
								{
									id: 'rain-x',
									title: 'Rain X (+$10)',
									price: 10,
								},
							],
							meetingLink: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2BYUP7glELVDWD_C8TmRVGcLQCILqYifA1UwtVALKrhGPJCO8L8PY3FDcJxnelqR3SQGJFp-yx?gv=true',
						},
						{
							title: 'Marketplace Detail',
							eta: '4hr',
							basePrice: 180,
							addonPrice: [],
							microservices: [
								'Hand Wash',
								'Tires and Rims Washed',
								'Wax',
								'Exterior Glass',
								'Tire Dressing',
								'Door Jambs',
								'Interior Glass',
								'Meticulous Vacuuming',
								'Surface Wipe Down',
								'Surface Protectant',
								'Leather Conditioning',
								'Fabric Shampooing',
								'Meticulous Cleaning',
								'Clean Scent'
							],
							addOns: [
								{
									id: 'headlight-restoration',
									title: 'Headlight Restoration (+$70)',
									price: 70,
								},
								{
									id: 'pet-hair-removal',
									title: 'Pet Hair Removal (+$45)',
									price: 45,
								},
								{
									id: 'engine-bay-detail',
									title: 'Engine Bay Detail (+$50)',
									price: 50,
								},
								{
									id: 'floor-mat-shampoo',
									title: 'Floor Mat Shampoo (+$25)',
									price: 25,
								},
								{
									id: 'rain-x',
									title: 'Rain X (+$10)',
									price: 10,
								},
							],
							meetingLink: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ23d4srCrhgYU_6z5RX_Hn0lLW8bTpOmk06U2mMKKOHehznRjQHOsITTwk-GLjTMDlrf_CCaILF?gv=true',
						},
					]
				},
				// SUV
				{
					title: 'Truck / SUV / Van',
					icon: {
						package: 'fas',
						name: 'truck-pickup',
					},
					packages: [
						{
							title: 'Wash and Wax',
							eta: '1hr 45min',
							basePrice: 60,
							addonPrice: [],
							microservices: [
								'Hand Wash',
								'Wax',
								'Exterior Glass',
								'Tire Dressing',
								'Light Vacuuming',
								'Surface Wipe Down',
								'Clean Scent'
							],
							addOns: [
								{
									id: 'headlight-restoration',
									title: 'Headlight Restoration (+$70)',
									price: 70,
								},
								{
									id: 'pet-hair-removal',
									title: 'Pet Hair Removal (+$45)',
									price: 45,
								},
								{
									id: 'engine-bay-detail',
									title: 'Engine Bay Detail (+$50)',
									price: 50,
								},
								{
									id: 'floor-mat-shampoo',
									title: 'Floor Mat Shampoo (+$25)',
									price: 25,
								},
								{
									id: 'rain-x',
									title: 'Rain X (+$10)',
									price: 10,
								},
							],
							meetingLink: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0iHJt0UKLLPUtx1_3UWI02ffBo_NUZBH3lYKWSXx1B48SRWiCoAHBQWzS5vNuIgQniVcW47vZ7?gv=true',
						},
						{
							title: 'Maintenance Detail',
							eta: '3hr',
							basePrice: 80,
							addonPrice: [],
							microservices: [
								'Hand Wash',
								'Tires and Rims Washed',
								'Wax',
								'Exterior Glass',
								'Tire Dressing',
								'Interior Glass',
								'Light Vacuuming',
								'Surface Wipe Down',
								'Surface Surface Protectant',
								'Leather Conditioning',
								'Clean Scent',
							],
							addOns: [
								{
									id: 'headlight-restoration',
									title: 'Headlight Restoration (+$70)',
									price: 70,
								},
								{
									id: 'pet-hair-removal',
									title: 'Pet Hair Removal (+$45)',
									price: 45,
								},
								{
									id: 'engine-bay-detail',
									title: 'Engine Bay Detail (+$50)',
									price: 50,
								},
								{
									id: 'floor-mat-shampoo',
									title: 'Floor Mat Shampoo (+$25)',
									price: 25,
								},
								{
									id: 'rain-x',
									title: 'Rain X (+$10)',
									price: 10,
								},
							],
							meetingLink: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2UjDHZInVvsDAPiGvpT5puV1yQ0caOXOXjeO6QKQ6n9nauWfPxqjE3AR4-vfk-gFc8q7koOkoI?gv=true',
						},
						{
							title: 'Premium Internal Detail',
							eta: '3hr',
							basePrice: 135,
							addonPrice: [],
							microservices: [
								'Door Jambs',
								'Interior Glass',
								'Meticulous Vacuuming',
								'Surface Wipe Down',
								'Surface Protectant',
								'Leather Conditioning',
								'Fabric Shampooing',
								'Meticulous Cleaning',
								'Clean Scent'
							],
							addOns: [
								{
									id: 'headlight-restoration',
									title: 'Headlight Restoration (+$70)',
									price: 70,
								},
								{
									id: 'pet-hair-removal',
									title: 'Pet Hair Removal (+$45)',
									price: 45,
								},
								{
									id: 'engine-bay-detail',
									title: 'Engine Bay Detail (+$50)',
									price: 50,
								},
								{
									id: 'floor-mat-shampoo',
									title: 'Floor Mat Shampoo (+$25)',
									price: 25,
								},
								{
									id: 'rain-x',
									title: 'Rain X (+$10)',
									price: 10,
								},
							],
							meetingLink: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2RQ-WKtDA-F0MEB1RnDETf5clfE9JQ61ixwdypxiCyS9A-aFb2Y0WqcYXOOay6VvwTd_cMnpG7?gv=true',
						},
						{
							title: 'Premium Detail',
							eta: '4hr 30min',
							basePrice: 200,
							addonPrice: [],
							microservices: [
								'Hand Wash',
								'Tires and Rims Washed',
								'Rim sealed and protected',
								'Paint decontamination',
								'Wax',
								'Exterior Glass',
								'Tire Dressing',
								'Other areas, including Gas Cap',
								'Dressing',
								'Door Jambs',
								'Interior Glass',
								'Meticulous Vacuuming',
								'Surface Wipe Down',
								'Surface Protectant',
								'Leather Conditioning',
								'Fabric Shampooing',
								'Meticulous Cleaning',
								'Clean Scent'
							],
							addOns: [
								{
									id: 'headlight-restoration',
									title: 'Headlight Restoration (+$70)',
									price: 70,
								},
								{
									id: 'pet-hair-removal',
									title: 'Pet Hair Removal (+$45)',
									price: 45,
								},
								{
									id: 'engine-bay-detail',
									title: 'Engine Bay Detail (+$50)',
									price: 50,
								},
								{
									id: 'floor-mat-shampoo',
									title: 'Floor Mat Shampoo (+$25)',
									price: 25,
								},
								{
									id: 'rain-x',
									title: 'Rain X (+$10)',
									price: 10,
								},
							],
							meetingLink: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2kRkgcLV495uuoZj1vW5jn61NEMqeKEUTlBHI-h8_6sFA_oeHs0zJ3rUgT24sQxVAS5Sn1wqzt?gv=true',
						},
						{
							title: 'Marketplace Detail',
							eta: '4hr 30min',
							basePrice: 200,
							addonPrice: [],
							microservices: [
								'Hand Wash',
								'Tires and Rims Washed',
								'Wax',
								'Exterior Glass',
								'Tire Dressing',
								'Door Jambs',
								'Interior Glass',
								'Meticulous Vacuuming',
								'Surface Wipe Down',
								'Surface Protectant',
								'Leather Conditioning',
								'Fabric Shampooing',
								'Meticulous Cleaning',
								'Clean Scent'
							],
							addOns: [
								{
									id: 'headlight-restoration',
									title: 'Headlight Restoration (+$70)',
									price: 70,
								},
								{
									id: 'pet-hair-removal',
									title: 'Pet Hair Removal (+$45)',
									price: 45,
								},
								{
									id: 'engine-bay-detail',
									title: 'Engine Bay Detail (+$50)',
									price: 50,
								},
								{
									id: 'floor-mat-shampoo',
									title: 'Floor Mat Shampoo (+$25)',
									price: 25,
								},
								{
									id: 'rain-x',
									title: 'Rain X (+$10)',
									price: 10,
								},
							],
							meetingLink: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Xnj_fSwY3cnnBYG6fwnzPvCYI9YqJuqFkdrVnSPwQVXiNDZ1fhTbfZ5uUqbm1ApiaBbgYT69r?gv=true',
						},
					]
				},
				// Large
				{
					title: 'Larger Vehicles',
					icon: {
						package: 'fas',
						name: 'ship',
					},
					packages: [
						{
							title: 'Wash and Wax',
							eta: '2hr',
							basePrice: 0,
							addonPrice: [],
							microservices: [
								'Hand Wash',
								'Wax',
								'Exterior Glass',
								'Tire Dressing',
								'Light Vacuuming',
								'Surface Wipe Down',
								'Clean Scent'
							],
							addOns: [
								{
									id: 'headlight-restoration',
									title: 'Headlight Restoration (+$70)',
									price: 70,
								},
								{
									id: 'pet-hair-removal',
									title: 'Pet Hair Removal (+$45)',
									price: 45,
								},
								{
									id: 'engine-bay-detail',
									title: 'Engine Bay Detail (+$50)',
									price: 50,
								},
								{
									id: 'floor-mat-shampoo',
									title: 'Floor Mat Shampoo (+$25)',
									price: 25,
								},
								{
									id: 'rain-x',
									title: 'Rain X (+$10)',
									price: 10,
								},
							],
							meetingLink: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3OEss6h4ltBAuQCXmnX7Ic47LmjEDFewhT6_9JcvkQ7o2eQc_1848Ef7CMr-UuYYmlSq5-O7jW?gv=true',
						},
						{
							title: 'Maintenance Detail',
							eta: '3hr 30min',
							basePrice: 0,
							addonPrice: [],
							microservices: [
								'Hand Wash',
								'Tires and Rims Washed',
								'Wax',
								'Exterior Glass',
								'Tire Dressing',
								'Interior Glass',
								'Light Vacuuming',
								'Surface Wipe Down',
								'Surface Surface Protectant',
								'Leather Conditioning',
								'Clean Scent',
							],
							addOns: [
								{
									id: 'headlight-restoration',
									title: 'Headlight Restoration (+$70)',
									price: 70,
								},
								{
									id: 'pet-hair-removal',
									title: 'Pet Hair Removal (+$45)',
									price: 45,
								},
								{
									id: 'engine-bay-detail',
									title: 'Engine Bay Detail (+$50)',
									price: 50,
								},
								{
									id: 'floor-mat-shampoo',
									title: 'Floor Mat Shampoo (+$25)',
									price: 25,
								},
								{
									id: 'rain-x',
									title: 'Rain X (+$10)',
									price: 10,
								},
							],
							meetingLink: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3if4v79UeYWkopPNtamsEFl3h_Rbtddvwl8pVba4n2_vj0CFbjUlCTMTH1YIKuiqh1xAmrIQIH?gv=true',
						},
						{
							title: 'Premium Internal Detail',
							eta: '3hr 30min',
							basePrice: 0,
							addonPrice: [],
							microservices: [
								'Door Jambs',
								'Interior Glass',
								'Meticulous Vacuuming',
								'Surface Wipe Down',
								'Surface Protectant',
								'Leather Conditioning',
								'Fabric Shampooing',
								'Meticulous Cleaning',
								'Clean Scent'
							],
							addOns: [
								{
									id: 'headlight-restoration',
									title: 'Headlight Restoration (+$70)',
									price: 70,
								},
								{
									id: 'pet-hair-removal',
									title: 'Pet Hair Removal (+$45)',
									price: 45,
								},
								{
									id: 'engine-bay-detail',
									title: 'Engine Bay Detail (+$50)',
									price: 50,
								},
								{
									id: 'floor-mat-shampoo',
									title: 'Floor Mat Shampoo (+$25)',
									price: 25,
								},
								{
									id: 'rain-x',
									title: 'Rain X (+$10)',
									price: 10,
								},
							],
							meetingLink: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1kUThTlpVMT4_MfriVx2j3My7ngwV1wwRz6HMUagjTIVgN79oVIO1H4Dz9M5VV-hqqWdGmA7N6?gv=true',
						},
						{
							title: 'Premium Detail',
							eta: '5hr',
							basePrice: 0,
							addonPrice: [],
							microservices: [
								'Hand Wash',
								'Tires and Rims Washed',
								'Rim sealed and protected',
								'Paint decontamination',
								'Wax',
								'Exterior Glass',
								'Tire Dressing',
								'Other areas, including Gas Cap',
								'Dressing',
								'Door Jambs',
								'Interior Glass',
								'Meticulous Vacuuming',
								'Surface Wipe Down',
								'Surface Protectant',
								'Leather Conditioning',
								'Fabric Shampooing',
								'Meticulous Cleaning',
								'Clean Scent'
							],
							addOns: [
								{
									id: 'headlight-restoration',
									title: 'Headlight Restoration (+$70)',
									price: 70,
								},
								{
									id: 'pet-hair-removal',
									title: 'Pet Hair Removal (+$45)',
									price: 45,
								},
								{
									id: 'engine-bay-detail',
									title: 'Engine Bay Detail (+$50)',
									price: 50,
								},
								{
									id: 'floor-mat-shampoo',
									title: 'Floor Mat Shampoo (+$25)',
									price: 25,
								},
								{
									id: 'rain-x',
									title: 'Rain X (+$10)',
									price: 10,
								},
							],
							meetingLink: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1coWobY1czAjS6FlCn7hviVm8tl0hXj1C55JCsEssUB9krrYn96gojbz7gjLU17-DypWK6RVCN?gv=true',
						},
						{
							title: 'Marketplace Detail',
							eta: '5hr',
							basePrice: 0,
							addonPrice: [],
							microservices: [
								'Hand Wash',
								'Tires and Rims Washed',
								'Wax',
								'Exterior Glass',
								'Tire Dressing',
								'Door Jambs',
								'Interior Glass',
								'Meticulous Vacuuming',
								'Surface Wipe Down',
								'Surface Protectant',
								'Leather Conditioning',
								'Fabric Shampooing',
								'Meticulous Cleaning',
								'Clean Scent'
							],
							addOns: [
								{
									id: 'headlight-restoration',
									title: 'Headlight Restoration (+$70)',
									price: 70,
								},
								{
									id: 'pet-hair-removal',
									title: 'Pet Hair Removal (+$45)',
									price: 45,
								},
								{
									id: 'engine-bay-detail',
									title: 'Engine Bay Detail (+$50)',
									price: 50,
								},
								{
									id: 'floor-mat-shampoo',
									title: 'Floor Mat Shampoo (+$25)',
									price: 25,
								},
								{
									id: 'rain-x',
									title: 'Rain X (+$10)',
									price: 10,
								},
							],
							meetingLink: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3cRUVGSGEhz9y9pmvAE1pmHNZCxCUOmF6lDQgpm6uDAEiYHkzo40hS29yuy7uUQi1ejULF7LX5?gv=true',
						},
					]
				},
			],
			// individual addons object
			addOns: [
				{
					id: 'headlight-restoration',
					title: 'Headlight Restoration (+$70)',
					price: 70,
				},
				{
					id: 'pet-hair-removal',
					title: 'Pet Hair Removal (+$45)',
					price: 45,
				},
				{
					id: 'engine-bay-detail',
					title: 'Engine Bay Detail (+$50)',
					price: 50,
				},
				{
					id: 'floor-mat-shampoo',
					title: 'Floor Mat Shampoo (+$25)',
					price: 25,
				},
				{
					id: 'rain-x',
					title: 'Rain X (+$10)',
					price: 10,
				},
			]
		}
	},
	methods: {
		updateCurrentSelection(index) {
			this.currentSelection = index;
		},
	},
}
</script>
<style lang="css"></style>