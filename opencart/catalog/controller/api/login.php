<?php
class ControllerApiLogin extends Controller {
	public function index() {
		$this->load->language('api/login');

		// Delete old login so not to cause any issues if there is an error
		unset($this->session->data['api_id']);

		$keys = array(
			'username',
			'password'
		);

		foreach ($keys as $key) {
			if (!isset($this->request->post[$key])) {
				$this->request->post[$key] = '';
			}
		}

		$json = array();

		$this->load->model('account/api');

		$api_info = $this->model_account_api->login($this->request->post['username'], $this->request->post['password']);

		if ($api_info) {
			$this->session->data['api_id'] = $api_info['api_id'];

			$json['cookie'] = $this->session->getId();

			$json['success'] = $this->language->get('text_success');
		} else {
			$json['error'] = $this->language->get('error_login');
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function login(){
		if (!isset($this->session->data['api_id'])) {
			$json['error']['warning'] = $this->language->get('error_permission');
		} else {
			$this->load->model('account/customer');
			$customer_info = $this->model_account_customer->getCustomerByEmail($this->request->post['username']);

			if ($customer_info) {
				if (!$customer_info['approved']) {
					$json['warning'] = $this->language->get('error_approved');
				}
				$this->session->data['customer_id'] = $customer_info['customer_id'];

				$json['cookie'] = $this->session->getId();

				$json['message'] = "login berhasil";
			} else {
				$json['message'] = "login gagal";
			}

			$this->response->addHeader('Content-Type: application/json');
			$this->response->setOutput(json_encode($json));
		}
	}
}
