# **📌 System Design Documentation**

## **1️⃣ Overview**

This document outlines the system design for a **Laravel-based Content Management System (CMS)** with a **React frontend**. The system allows admins to manage website content dynamically from a backend panel (Filament), and the frontend fetches this data via REST APIs.

## **2️⃣ Architecture**

- **Frontend:** React (Vite)
- **Backend:** Laravel (PHP 8.2)
- **Database:** MySQL
- **Authentication:** Laravel Sanctum (Token-based authentication)
- **Admin Panel:** Filament (Laravel Admin UI)
- **Hosting:** Shared hosting (Hostinger)
- **State Management:** Zustand
- **Cookies for Authentication:** Yes

## **3️⃣ High-Level Flow**

1. Admin logs into the Filament dashboard.
2. Admin updates website sections (e.g., Navbar, Footer, Homepage, Services, etc.).
3. The updated data is stored in the MySQL database.
4. React frontend fetches content dynamically via Laravel API.
5. Users view the dynamically updated website in real-time.

## **4️⃣ Backend Folder Structure**

```
my-cms/
├── app/
│   ├── Http/
│   │   ├── Controllers/        # API Controllers
│   │   ├── Middleware/         # Security Middleware
│   ├── Models/                 # Laravel Eloquent Models
│   ├── Providers/
│
├── database/
│   ├── migrations/              # Database schema changes
│   ├── seeders/                 # Dummy data
│
├── routes/
│   ├── web.php                  # Web routes (Filament Admin Panel)
│   ├── api.php                  # API routes (React Frontend)
│
├── public/                       # Public assets
├── resources/                    # Blade templates (For Filament)
├── .env                          # Environment variables
└── storage/                      # File uploads
```

## **5️⃣ React Frontend Folder Structure**

```
cms-frontend/
├── public/                  # Static assets (favicon, images, etc.)
├── src/
│   ├── assets/              # Static assets (icons, images, styles)
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Footer.jsx       # Footer section
│   │   ├── Loader.jsx       # Loading spinner
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Homepage
│   │   ├── About.jsx        # About us page
│   │   ├── Services.jsx     # Services page
│   │   ├── Projects.jsx     # Projects page
│   │   ├── Contact.jsx      # Contact page
│   │   ├── Blog.jsx         # Blog listing page
│   │   ├── BlogDetail.jsx   # Blog details page
│   ├── services/            # API service functions
│   │   ├── api.js           # API configuration and fetch logic
│   ├── store/               # Zustand store for state management
│   │   ├── useContentStore.js
│   ├── layouts/             # Layout components (Reusable templates)
│   │   ├── MainLayout.jsx   # Main Layout with Navbar/Footer
│   ├── router/              # React Router configuration
│   │   ├── routes.jsx
│   ├── styles/              # Global styles (CSS/SCSS)
│   ├── App.jsx              # Main App component
│   ├── main.jsx             # Entry point
├── .env                     # Environment variables
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
└── README.md                # Documentation
```

## **6️⃣ Database Schema**

### **📌 `contents` Table**

Stores dynamic content for website sections.

```sql
CREATE TABLE contents (
    id INT PRIMARY KEY AUTO_INCREMENT,
    section_name VARCHAR(255) UNIQUE NOT NULL,
    content JSON NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### **📌 `users` Table (Admins Only)**

Stores admin login details.

```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## **7️⃣ API Endpoints**

| HTTP Method | Endpoint                 | Description                              |
| ----------- | ------------------------ | ---------------------------------------- |
| `POST`      | `/api/login`             | Admin login using Sanctum authentication |
| `POST`      | `/api/logout`            | Admin logout                             |
| `GET`       | `/api/content/{section}` | Get content for a specific section       |
| `PUT`       | `/api/content/{section}` | Update content (Auth required)           |

## **8️⃣ Deployment Steps**

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Run Local Development Server**

   ```bash
   npm run dev
   ```

3. **Build for Production**

   ```bash
   npm run build
   ```

4. **Upload Build Folder to Hostinger**
   - Upload `dist/` folder to your shared hosting server.
   - Configure `.htaccess` to serve `index.html`.

## **9️⃣ Estimated Expenses (INR)**

| Service                                      | Cost (Approx.)            |
| -------------------------------------------- | ------------------------- |
| **Hostinger Shared Hosting** (Business Plan) | ₹330/month (~₹3,960/year) |
| **Domain Name**                              | ₹800 - ₹1,200/year        |
| **SSL Certificate** (Free with Hosting Plan) | ₹0                        |
| **MySQL Database** (Included in Hosting)     | ₹0                        |
| **Total Annual Cost**                        | ~₹4,800 - ₹5,200          |

---

## **✅ Summary**

- **Admin Panel:** Manage website sections dynamically.
- **API:** Fetch and update content in JSON format.
- **React Frontend:** Displays content dynamically using API.
- **Authentication:** Laravel Sanctum (Token-based security) with Cookies.
- **State Management:** Zustand for global state handling.
- **Hosting:** Deployed on Hostinger (Shared Hosting).
- **Estimated Cost:** ~₹4,800 - ₹5,200 per year.

# Laravel Environment Setup (PHP & Composer Installation)

## ✅ Step 1: Install PHP

Laravel requires PHP (minimum version **8.1** for Laravel 10).

### 1.1 Download PHP

If you don't have PHP installed, download it from:  
[🔗 Windows PHP Downloads](https://windows.php.net/download/)

**Recommended Version:** PHP **8.2**

- Use **Non-thread safe version** if using Apache/XAMPP.
- Use **Thread Safe version** for CLI.
- Choose **Windows x64 ZIP (Thread Safe)**.

### 1.2 Install PHP

1. Extract the downloaded ZIP file to `C:\php` (or any preferred location).
2. Rename the extracted folder to just `php`.

### 1.3 Configure PHP in Environment Variables

1. Open **System Properties**:
   - Press `Win + R`, type `sysdm.cpl`, and press **Enter**.
2. Go to **"Advanced"** → **"Environment Variables"**.
3. Under **"System Variables"**, find `Path` → Click **"Edit"**.
4. Click **"New"** and **add the PHP installation path**:
   - Example: `C:\php`
5. Click **OK** to save and exit.

### 1.4 Verify PHP Installation

1. Open **Command Prompt (cmd)** or **PowerShell** and type:

   ```powershell
   php -v
   ```

2. If PHP is installed correctly, you should see an output similar to:

   ```
   PHP 8.2.x (cli) (built: ...)
   ```

3. If you get `"command not found"`, restart your PC and try again.

---

## ✅ Step 2: Install Composer

### 2.1 Download Composer

Go to the [🔗 Composer Download Page](https://getcomposer.org/download/).  
Download `Composer-Setup.exe` (Windows Installer).

### 2.2 Install Composer

1. Run the Installer (`Composer-Setup.exe`).
2. **Select PHP Executable**:
   - Browse to `C:\php\php.exe`.
3. **Enable Composer in System PATH** (should be selected automatically).
4. Complete the installation.

### 2.3 Verify Composer Installation

1. Open **Command Prompt** or **PowerShell** and run:

   ```powershell
   composer -V
   ```

2. Expected output:

   ```
   Composer version 2.x.x
   ```

## ✅ Step 3: Setup Database

## Option 2: Connect Directly to Hostinger MySQL (For Live Development)

If you prefer to develop directly on Hostinger's MySQL database, follow these steps:

1️⃣ Get Your Hostinger MySQL Database Details

    - Log in to Hostinger.
    - Go to Hosting → Databases → MySQL Databases.
    - Find your Database Name, Host, Username, and Password.

2️⃣ Connect to MySQL Database

> For Prod

        Example:
        makefile
        Copy
        Edit
        DB_NAME: envo_care_db
        DB_USER: tin
        DB_PASS: 3W+vbh2@$
        DB_HOST: mysql.hostinger.com
        DB_CONNECTION=mysql

         DB_CONNECTION=mysql
         DB_HOST=auth-db1001.hstgr.io
         DB_PORT=3306
         DB_DATABASE=u809801411_envo_care_db
         DB_USERNAME=u809801411_tin
         DB_PASSWORD=3W+vbh2@$

> For local

        DB_DATABASE=envo_care_db
        DB_USERNAME=root
        DB_PASSWORD=
        DB_HOST=localhost

         DB_CONNECTION=mysql
         DB_HOST=localhost
         DB_PORT=3306
         DB_DATABASE=envo_care_db
         DB_USERNAME=root
         DB_PASSWORD=

## Clear and Cache Configurations

      php artisan config:clear
      php artisan cache:clear
      php artisan config:cache

## Run Migrations to Set Up Database Tables

      php artisan migrate

## create laravel backend Server

      composer create-project --prefer-dist laravel/laravel envo-server

      cd E:\EnvoCare\envo-server

      composer install

- Updating the .env file with the database details:

      APP_NAME=EnvoCare
      APP_ENV=production
      APP_KEY= # Run `php artisan key:generate` and paste the key here
      APP_DEBUG=false
      APP_URL=https://envocare.demovoting.com/ # Replace with your actual domain or subdomain

      # Updated Database Connection

      DB_CONNECTION=mysql
      DB_HOST=auth-db1001.hstgr.io
      DB_PORT=3306
      DB_DATABASE=u809801411_envo_care_db
      DB_USERNAME=u809801411_tin
      DB_PASSWORD=3W+vbh2@$

> This will check if all required PHP extensions and dependencies are installed properly.

      composer check-platform-reqs


      php artisan --version
      php artisan config:clear
      php artisan cache:clear
      php artisan key:generate

> Run backend Server

      php artisan serve

2️⃣ Install Filament for Admin Panel
2️⃣ Check Laravel Version & Install Compatible Filament

Run this command to check your Laravel version:

      php artisan --version
      ✅ If Laravel 10+, install Filament v3:

      composer require filament/filament:^3.3
      ✅ If Laravel 9, install Filament v2:

- Run Filament Installation

  php artisan filament:install
  php artisan filament:install --panels

  php artisan make:filament-user

- Enter an admin email, name, and password for the first admin user.

📌 Step 1: Install Filament Panels
Run this command:

php artisan filament:install --panels
This will:

Publish Filament's config files.
Set up necessary assets.

📌 Step 2: Create an Admin User
Once installed, create an admin user:

php artisan make:filament-user
Enter name, email, password when prompted.
name : envo-admin
email : envocares@gmail.com
pass : envocareadmin@123
📌 Step 3: Login to Filament Panel

Now, visit:
http://127.0.0.1:8000/admin
Login with the credentials you just created.

- Run Laravel Server

           php artisan serve

  Visit http://127.0.0.1:8000/admin
  Log in with the admin credentials you just created.

- pass : envocare@123
- user : envocares@gmail.com

✅ Step 1: Set Up Laravel Backend

1.1 Install Laravel

1.  Create a New Laravel Project
    Run the following command to create a new Laravel project:

          composer create-project --prefer-dist laravel/laravel cms-backend

Replace cms-backend with your desired project name.

2.  Navigate to the Project Directory
    Move into the project folder:

          cd cms-backend

3.  Generate Application Key
    Run the following command to generate a unique application key:

         php artisan key:generate

1.2 Set Up Database

1.  Create a MySQL Database

         Create a new database (e.g., cms_db) using phpMyAdmin or your preferred MySQL client.

2.  Update .env File

         Open the .env file and update the database credentials:

            env
            Copy
            DB_CONNECTION=mysql
            DB_HOST=127.0.0.1
            DB_PORT=3306
            DB_DATABASE=cms_db
            DB_USERNAME=root
            DB_PASSWORD=

3.  Run Migrations

Create a database in your local MySQL server and update the .env file with your database credentials. Then, run the following

create database cms_envo;

Execute the default migrations to create the necessary tables:

         php artisan migrate

1.3 Install Filament for Admin Panel

1.  Install Filament
    Run the following command to install Filament:

          composer require filament/filament

2.  Publish Filament Assets

    Publish Filament's configuration and assets:

            php artisan filament:install --panels

3.  Create an Admin User

        Create the first admin user for the Filament panel:

             php artisan make:filament-user

    Provide the following details when prompted:

         Name: admin
         Email: envocares@gmail.com
         Password: admin123

4.  Access Filament Admin Panel

        Start the Laravel development server:
              php artisan route:list

         check route to access for admin panel:
             php artisan serve

    Visit the Filament admin panel at:

    http://127.0.0.1:8000/envoadmin
    Log in with the admin credentials you just created.

# ✅ Step 2: Create Database Schema for CMS Content

2.1 Create a Migration for contents Table

Run the following command to create a migration for the contents table:

         php artisan make:migration create_contents_table

2.2 Define the Schema

Open the newly created migration file in database/migrations/ and define the schema:

      public function up()
      {
      Schema::create('contents', function (Blueprint $table) {
      $table->id();
      $table->string('section_name')->unique();
      $table->json('content');
      $table->timestamps();
      });
      }

2.3 Run the Migration

Execute the migration to create the contents table:

         php artisan migrate

✅ Step 3: Create Models and Controllers

3.1 Create a Model for contents Table
Run the following command to create a model:

         php artisan make:model Content

3.2 Create a Controller for API Endpoints
Run the following command to create a controller:

         php artisan make:controller Api/ContentController

3.3 Define API Routes

Open routes/api.php and define the API routes:

      use App\Http\Controllers\Api\ContentController;

      Route::get('/content/{section}', [ContentController::class, 'getContent']);
      Route::put('/content/{section}', [ContentController::class, 'updateContent'])->middleware('auth:sanctum');

3.4 Implement Controller Methods

Open app/Http/Controllers/Api/ContentController.php and implement the methods:

         namespace App\Http\Controllers\Api;

         use App\Models\Content;
         use Illuminate\Http\Request;
         use App\Http\Controllers\Controller;

         class ContentController extends Controller
         {
         // Get content for a specific section
         public function getContent($section)
            {
               $content = Content::where('section_name', $section)->first();
               return response()->json($content);
         }

            // Update content for a specific section (Admin only)
            public function updateContent(Request $request, $section)
            {
               $request->validate([
                     'content' => 'required|json',
               ]);

               $content = Content::updateOrCreate(
                     ['section_name' => $section],
                     ['content' => $request->content]
               );

               return response()->json($content);
            }

         }

✅ Step 4: Set Up Filament Resource for CMS Content
4.1 Create a Filament Resource
Run the following command to create a Filament resource for managing dynamic content:

bash
Copy
php artisan make:filament-resource Content
4.2 Customize the Resource
Open the newly created resource in app/Filament/Resources/ContentResource.php and customize it:

php
Copy
namespace App\Filament\Resources;

use App\Filament\Resources\ContentResource\Pages;
use App\Models\Content;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;

class ContentResource extends Resource
{
protected static ?string $model = Content::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('section_name')
                    ->required()
                    ->unique(),
                Forms\Components\Textarea::make('content')
                    ->required()
                    ->json(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('section_name'),
                Tables\Columns\TextColumn::make('content')->limit(50),
            ])
            ->filters([]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListContents::route('/'),
            'create' => Pages\CreateContent::route('/create'),
            'edit' => Pages\EditContent::route('/{record}/edit'),
        ];
    }

}
4.3 Add the Resource to Filament Navigation
Open app/Providers/FilamentServiceProvider.php and add the resource to the navigation:

php
Copy
protected function getNavigationItems(): array
{
return [
// Other navigation items
ContentResource::class,
];
}

✅ Step 5: Test the API Endpoints
Start the Laravel Server
Run the following command to start the Laravel development server:

bash
Copy
php artisan serve
Test the API
Use tools like Postman or cURL to test the API endpoints:

GET http://127.0.0.1:8000/api/content/home
Fetch content for the home section.

PUT http://127.0.0.1:8000/api/content/home
Update content for the home section (requires authentication).

Create a Filament Resource for Testimonials
Generate a Filament resource for testimonials:

bash
Copy
php artisan make:filament-resource Testimonial
This will create a TestimonialResource in the app/Filament/Resources directory.

Edit the TestimonialResource
Update the TestimonialResource to manage testimonials:
namespace App\Filament\Resources;

use App\Filament\Resources\TestimonialResource\Pages;
use App\Models\Testimonial;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;

class TestimonialResource extends Resource
{
protected static ?string $model = Testimonial::class;

    protected static ?string $navigationIcon = 'heroicon-o-chat-alt-2';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Textarea::make('content')
                    ->required(),
                Forms\Components\TextInput::make('position')
                    ->maxLength(255),
                Forms\Components\FileUpload::make('image')
                    ->image()
                    ->directory('testimonials')
                    ->preserveFilenames(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name'),
                Tables\Columns\TextColumn::make('position'),
                Tables\Columns\ImageColumn::make('image'),
            ])
            ->filters([
                //
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTestimonials::route('/'),
            'create' => Pages\CreateTestimonial::route('/create'),
            'edit' => Pages\EditTestimonial::route('/{record}/edit'),
        ];
    }

}
Add Testimonials to Filament Navigation
Edit the TestimonialResource to add it to the Filament navigation:
protected static ?string $navigationGroup = 'Content Management';

2. Create an API to Fetch Testimonials
   Create an API Controller
   Generate an API controller for testimonials:

bash
Copy
php artisan make:controller Api/TestimonialController --api
Edit the TestimonialController (app/Http/Controllers/Api/TestimonialController.php):

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
// Fetch all testimonials
public function index()
{
$testimonials = Testimonial::all();
        return response()->json($testimonials);
}

    // Fetch a single testimonial
    public function show($id)
    {
        $testimonial = Testimonial::findOrFail($id);
        return response()->json($testimonial);
    }

}
Define API Routes
Add API routes in routes/api.php:

php
Copy
use App\Http\Controllers\Api\TestimonialController;

Route::apiResource('testimonials', TestimonialController::class);

3. Consume the API in React
   Set Up React
   If you haven’t already set up React, you can use a tool like Vite or Create React App.

Fetch Testimonials in React
In your React app, create a component to fetch and display testimonials:

jsx
Copy
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Testimonials = () => {
const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        // Fetch testimonials from the Laravel API
        axios.get('http://your-laravel-app.test/api/testimonials')
            .then(response => {
                setTestimonials(response.data);
            })
            .catch(error => {
                console.error('Error fetching testimonials:', error);
            });
    }, []);

    return (
        <div>
            <h1>Testimonials</h1>
            {testimonials.map(testimonial => (
                <div key={testimonial.id}>
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.content}</p>
                    <p><em>{testimonial.position}</em></p>
                    {testimonial.image && (
                        <img
                            src={`http://your-laravel-app.test/storage/${testimonial.image}`}
                            alt={testimonial.name}
                            width="100"
                        />
                    )}
                </div>
            ))}
        </div>
    );

};

export default Testimonials;
Add the Component to Your App

4. Handle CORS (Cross-Origin Resource Sharing)
   If your React +++++++++
   app is running on a different domain (e.g., localhost:3000), you need to configure CORS in Laravel.

Install the fruitcake/laravel-cors package:

bash
Copy
composer require fruitcake/laravel-cors
Publish the CORS configuration file:

bash
Copy
php artisan vendor:publish --tag="cors"
Edit the config/cors.php file to allow your React app’s domain:

php
Copy
'paths' => ['api/*'],
'allowed_methods' => ['*'],
'allowed_origins' => ['http://localhost:3000'], // Add your React app's URL
'allowed_headers' => ['*'],

## Setup Cors middleware

If you're not using Laravel's built-in CORS middleware (\Illuminate\Http\Middleware\HandleCors::class), you can create a custom middleware to handle CORS.

Step 1: Create the Middleware
Run the following command to create a new middleware:

bash
Copy
php artisan make:middleware Cors

Step 2: Edit the Middleware
Open the newly created middleware file (app/Http/Middleware/Cors.php) and add the following code:

php
Copy
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Cors
{
public function handle(Request $request, Closure $next)
    {
        // Add CORS headers
        $response = $next($request);

        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        $response->headers->set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');

        return $response;
    }

}

Step 3: Register the Middleware
Ensure the middleware is registered in the $middleware array in app/Http/Kernel.php:

php
Copy
protected $middleware = [
\App\Http\Middleware\Cors::class, // Custom CORS middleware
// Other middleware
];

## Making Testimonial Section Dynamic

1.1 Create a Migration for testimonials Table
Run the following command to create a migration:

        php artisan make:migration create_testimonials_table

Open the newly created migration file in database/migrations/ and define the schema:

        public function up()
        {
            Schema::create('testimonials', function (Blueprint $table) {
                $table->id();
                $table->string('customer_name');
                $table->string('image_url');
                $table->float('rating');
                $table->text('feedback');
                $table->timestamps();
            });
        }

Run the migration to create the table:

        php artisan migrate

1.2 Create a Model for testimonials Table

Run the following command to create a model:

        php artisan make:model Testimonial

1.3 Create a Controller for Testimonials API

        php artisan make:controller Api/TestimonialController

Open the newly created controller (app/Http/Controllers/Api/TestimonialController.php) and implement the index method:

        namespace App\Http\Controllers\Api;

        use App\Models\Testimonial;
        use App\Http\Controllers\Controller;
        use Illuminate\Http\Request;

        class TestimonialController extends Controller
        {
            // Fetch all testimonials
            public function index()
            {
                $testimonials = Testimonial::all();
                return response()->json($testimonials);
            }
        }

1.4 Define API Routes

Open routes/api.php and define the API route for fetching testimonials:

            use App\Http\Controllers\Api\TestimonialController;

            Route::get('/testimonials', [TestimonialController::class, 'index']);

1.5 Seed Testimonials Data (Optional)

Create a seeder to populate the testimonials table with dummy data:

            php artisan make:seeder TestimonialSeeder

Open database/seeders/TestimonialSeeder.php and add the following:

        use App\Models\Testimonial;
        use Illuminate\Database\Seeder;

        class TestimonialSeeder extends Seeder
        {
            public function run()
            {
                Testimonial::create([
                    'customer_name' => 'Government Project Engineer',
                    'image_url' => 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    'rating' => 4.5,
                    'feedback' => 'Suviam Infra has been a reliable partner in our irrigation projects. Their RCC pipes are of exceptional quality, and their team ensures timely project execution.',
                ]);

                Testimonial::create([
                    'customer_name' => 'Infrastructure Developer',
                    'image_url' => 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    'rating' => 4.5,
                    'feedback' => 'The attention to detail and the quality of the product exceeded my expectations. Highly recommended!',
                ]);

                // Add more testimonials as needed
            }
        }

Run the seeder:

            php artisan db:seed --class=TestimonialSeeder

## Adding Filament Testimonial Resource

### Step 1: Install Filament

Install Filament (if not already installed):

composer require filament/filament
php artisan filament:install --panels
Create a Filament Resource:

## Step 2

Run the following command to create a Filament resource for managing testimonials:

php artisan make:filament-resource Testimonial

## Step 3

Customize the Resource:
Open the newly created resource (app/Filament/Resources/TestimonialResource.php) and customize it:

            namespace App\Filament\Resources;

            use App\Filament\Resources\TestimonialResource\Pages;
            use App\Models\Testimonial;
            use Filament\Forms;
            use Filament\Resources\Form;
            use Filament\Resources\Resource;
            use Filament\Resources\Table;
            use Filament\Tables;

            class TestimonialResource extends Resource
            {
                protected static ?string $model = Testimonial::class;

                protected static ?string $navigationIcon = 'heroicon-o-chat';

                public static function form(Form $form): Form
                {
                    return $form
                        ->schema([
                            Forms\Components\TextInput::make('customer_name')
                                ->required(),
                            Forms\Components\TextInput::make('image_url')
                                ->required(),
                            Forms\Components\TextInput::make('rating')
                                ->numeric()
                                ->required(),
                            Forms\Components\Textarea::make('feedback')
                                ->required(),
                        ]);
                }

                public static function table(Table $table): Table
                {
                    return $table
                        ->columns([
                            Tables\Columns\TextColumn::make('customer_name'),
                            Tables\Columns\TextColumn::make('rating'),
                            Tables\Columns\TextColumn::make('feedback')->limit(50),
                        ])
                        ->filters([]);
                }

                public static function getPages(): array
                {
                    return [
                        'index' => Pages\ListTestimonials::route('/'),
                        'create' => Pages\CreateTestimonial::route('/create'),
                        'edit' => Pages\EditTestimonial::route('/{record}/edit'),
                    ];
                }
            }

4. Add the Resource to Filament Navigation:

Open app/Providers/FilamentServiceProvider.php and add the resource to the navigation:

        protected function getNavigationItems(): array
        {
            return [
                // Other navigation items
                TestimonialResource::class,
            ];
        }
