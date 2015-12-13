<?php
class ControllerApiProduct extends Controller {
  public function index() {
		$this->load->language('api/currency');

		$json = array();

		if (!isset($this->session->data['api_id'])) {
			$json['error'] = $this->language->get('error_permission');
		} else {
      $this->load->model('catalog/product');
      $this->load->model('tool/image');
			$products = $this->model_catalog_product->getProducts();
      if ($products) {
        foreach($products as $product){
          if ($product['image']) {
  					$image = $this->model_tool_image->resize($product['image'], $this->config->get('config_image_product_width'), $this->config->get('config_image_product_height'));
  				} else {
  					$image = $this->model_tool_image->resize('placeholder.png', $this->config->get('config_image_product_width'), $this->config->get('config_image_product_height'));
  				}
          //$json['product'] = json_encode($product);
          $json['products'][] = array(
  					'product_id' => $product['product_id'],
  					'name'       => $product['name'],
  					'model'      => $product['model'],
  					'quantity'   => $product['quantity'],
  					'price'      => $this->currency->format($this->tax->calculate($product['price'], $product['tax_class_id'], $this->config->get('config_tax'))),
            'thumb'       => $image,
  					'reward'     => $product['reward']
  				);
        }
      } else {
        $json['error'] = "No avaible products";
      }
    }
    $this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
  }

  public function get_product(){
    $id = $this->request->get['product_id'];
    $this->load->language('api/currency');

		$json = array();

		if (!isset($this->session->data['api_id'])) {
			$json['error'] = $this->language->get('error_permission');
		} else {
      $this->load->model('catalog/product');
      $this->load->model('tool/image');
			$product = $this->model_catalog_product->getProduct($id);

      if ($product) {
          if ($product['image']) {
  					$image = $this->model_tool_image->resize($product['image'], $this->config->get('config_image_product_width'), $this->config->get('config_image_product_height'));
  				} else {
  					$image = $this->model_tool_image->resize('placeholder.png', $this->config->get('config_image_product_width'), $this->config->get('config_image_product_height'));
  				}
          //$json['product'] = json_encode($product);
          $json['product'] = array(
  					'product_id' => $product['product_id'],
  					'name'       => $product['name'],
  					'model'      => $product['model'],
  					'quantity'   => $product['quantity'],
  					'price'      => $this->currency->format($this->tax->calculate($product['price'], $product['tax_class_id'], $this->config->get('config_tax'))),
            'thumb'       => $image,
  					'reward'     => $product['reward']
  				);

      } else {
        $json['error'] = "No avaible products";
      }
    }
    $this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
  }
}
?>
