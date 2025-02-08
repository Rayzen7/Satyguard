<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $article = Article::with('category')->get();
        return response()->json([
            'article' => $article
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateData = Validator::make($request->all(), [
            'image' => 'required|mimes:png,jpg,jpeg|max:4000',
            'title' => 'required',
            'desc' => 'required',
            'link' => 'required',
            'category_id' => 'required|exists:categories,id',
        ]);

        if ($validateData->fails()) {
            return response()->json([
                'message' => 'Invalid Field'
            ], 422);
        }

        $path = $request->file('image')->store('article', 'public');
        $article = Article::create([
            'image' => $path,
            'title' => $request->title,
            'desc' => $request->desc,
            'link' => $request->link,
        ]);

        $categoryIds = $request->input('category_id');
        if (is_string($categoryIds)) {
            $categoryIds = explode(',', $categoryIds);
        }
        $categoryIds = array_map('intval', $categoryIds); 
        $article->category()->attach($categoryIds);

        return response()->json([
            'message' => 'create article success'
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $article = Article::with('category')->findOrFail($id);
        return response()->json([
            'article' => $article
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $article = Article::with('category')->findOrFail($id);
        $validateData = Validator::make($request->all(), [
            'image' => 'required',
            'title' => 'required',
            'desc' => 'required',
            'link' => 'required',
            'category_id' => 'required|exists:categories,id',
        ]);

        if ($validateData->fails()) {
            return response()->json([
                'message' => 'Invalid Field'
            ], 422);
        }

        if ($request->hasFile('image')) {
            if ($request->image) {
                Storage::delete('public/article/' . $request->image);
            }

            $path = $request->file('image')->store('article', 'public');
            $article->image  = $path;
        }

        $categoryIds = $request->input('category_id');
        if (is_string($categoryIds)) {
            $categoryIds = explode(',', $categoryIds);
        }
        $categoryIds = array_map('intval', $categoryIds); 
        $article->category()->sync($categoryIds);

        $article->title = $request->title;
        $article->desc = $request->desc;
        $article->link = $request->link;
        $article->save();

        return response()->json([
            'message' => 'update article success'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $article = Article::findOrFail($id);
        if ($article->image) {
            Storage::delete('public/article/' . $article->image);
        }

        $article->delete();
        return response()->json([
            'message' => 'delete article success'
        ], 200);
    }
}
