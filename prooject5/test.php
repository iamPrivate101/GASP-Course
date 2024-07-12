<?php 

namespace App\Tests\Behat;

use App\Constant\RouteList;
use App\PageObjects\AddUser;
use App\PageObjects\DashboardPage;
use App\PageObjects\LoginPage;
use App\PageObjects\SidebarPage;
use App\PageObjects\UserManagementPage;
use App\Service\UserService;

class User extends BaseContext{

    public function __construct(
        public readonly UserService $userService,
    )
    {
        parent::__construct();
    }

    /**
     * @Given I am logged in as the superadmin
     */
    public function iAmLoggedIn(){
        self::$driver->get(RouteList::getLoginUrl());
        if(self::$driver->getCurrentURL()=== RouteList::LOGIN_PATH) {
            $loginPage = new LoginPage(self::$driver, $this->userService);
            $loginPage->login();
        }
    }

       /**
     * @Given I am on the dashboard page
     */
    public function iAmOnTheDashBoardPage() {
        new DashboardPage(self::$driver, $this->userService);
    }

    /**
     * @When I click on the User Management icon from the sidebar
     */
    public function iClickOnTheUserManagementButton(){
        $dashboardPage = new DashboardPage(self::$driver);
        $dashboardPage->clickUserManagementSidebarButton();
    }

    /**
     * @Then I should be redirected to the User page 
     */
    public function iAmOnTheUserPage(){
        $userManagementPage = new UserManagementPage(self::$driver);
    }

    /**
     * @Then I click the Add User button
     */
    public function iClickAddUserButton(){

        $userManagementPage = new UserManagementPage(self::$driver);
        $userManagementPage->clickUserAddButton();
    }

    /**
     * @Then I should be redirected to the Add User page 
     */
    public function iAmOnTheAddUserPage(){
        $addUserPage = new AddUser(self::$driver);
    }

    /**
     * @When I fill the form with valid data
     */
    public function iEnterValidCredentials(){
        $addUserPage = new AddUser(self::$driver);
        $addUserPage->enterNewUserCredentials();
    }

    /**
     * @Then I click the Create button
     */
    public function iClickCreateButton(){
        $addUserPage = new AddUser(self::$driver);
        $addUserPage->UserCreateButton();
    }

    /**
     * @When I click the Sidebar Dashboard icon
     */
    public function iClickSidebarDashboardIcon(){
        $sidebarIcon = new SidebarPage(self::$driver);
        $sidebarIcon->clickDashboardIcon();
    }

    /**
     * @Then I should be redirected to the Dashboard page
     */
    public function iAmRedirectedToDashBoardPage() {
        new DashboardPage(self::$driver, $this->userService);
    }

     /**
     * @When I click the first User Delete icon
     */
    public function iClickFirstUserDeleteIcon(){
        $deleteUser = new UserManagementPage(self::$driver);
        $deleteUser->clickUserDeleteIcon();
    }

    /**
     * @Then delete popup is visible
     */
    public function iViewTheDeletePopup(){
        $deletePopup = new UserManagementPage(self::$driver);
        $deletePopup->isDeletePopupVisible();
    }

    /**
     * @Then I click the Confirm Button
     */
    public function iClickConfirmButton(){
        $confirmButton = new UserManagementPage(self::$driver);
        $confirmButton->clickConfirmButton();
        sleep(3);

    }

   

}

Feature: Add User Functionality
  @userAdd
  As an admin,
  I want to add a new user to the system
  So that they can login and use the system.

  Scenario: Successful Add User
    Given I am logged in as the superadmin
    Given I am on the dashboard page
    When I click on the User Management icon from the sidebar
    Then I should be redirected to the User page
    Then I click the Add User button
    Then I should be redirected to the Add User page
    When I fill the form with valid data
    Then I click the Create button
    Then I should be redirected to the User page
    When I click the Sidebar Dashboard icon
    Then I should be redirected to the Dashboard page
    When I click the logout button on the dashboard Page
    Then I should be redirected to the login page.


    
 
  
