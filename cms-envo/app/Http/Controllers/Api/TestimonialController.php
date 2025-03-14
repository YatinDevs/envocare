<?php

namespace App\Http\Controllers\Api;

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

    // Fetch a single testimonial
    public function show($id)
    {
        $testimonial = Testimonial::findOrFail($id);
        return response()->json($testimonial);
    }
}
