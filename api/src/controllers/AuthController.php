<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

class AuthController extends Controller {

    public function __construct() {
        parent::__construct();
        $this->load->helper('url');
        $this->load->library('session');
        $this->load->library('form_validation');
        $this->load->library('rest');
    }

    public function index() {
        $this->load->view('auth/index');
        echo('Hello World!');
    }

    public function register() {
        $this->load->view('auth/register');
    }

	public function login() {
		$this->load->model('auth/login');
		$this->load->model('auth/register');
		$this->load->model('auth/reset');
		$this->load->model('auth/change');
		$this->load->model('auth/logout');

		if ($this->input->post('username') && $this->input->post('password')) {
			$this->login->do_login();
		}

		if ($this->input->post('username') && $this->input->post('password') && $this->input->post('token')) {
			$this->change->do_change();
		}

		if ($this->input->post('email') && $this->input->post('password') && $this->input->post('token')) {
			$this->reset->do_reset();
		}

		if ($this->input->post('email') && $this->input->post('password')) {
			$this->register->do_register();
		}

		if ($this->input->post('logout')) {
			$this->logout->do_logout();
		}
	}
}

?>