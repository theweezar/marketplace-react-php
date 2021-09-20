const openModal = (component_name, modal_name, delimiter = "_") => {
  return{ 
    type: modal_name ? String.format("%s%s%s", component_name, delimiter, modal_name): component_name
  };
};

export default openModal;
