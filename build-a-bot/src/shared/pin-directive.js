/*SHORTHAND VERSION will both bind & update children when parent updates*/
export default function(element, binding) {
	Object.keys(binding.value).forEach((position) => {
    	element.style[position] = binding.value[position];
    });
    element.style.position='absolute';
};

/*EXPLICIT VERSION*/
/*function applyStyle(element, binding) {          
    Object.keys(binding.value).forEach((position) => {
    	element.style[position] = binding.value[position];
    });
    element.style.position='absolute';
}

export default {
	bind: (element, binding) => {
		applyStyle(element, binding);
	},
	update: (element, binding) => {
		applyStyle(element, binding);
	},
}; */