<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $video = Video::all();
        return response()->json([
            'video' => $video
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
            'title' => 'required',
            'desc' => 'required',
            'video' => 'required',
            'created_by' => 'required',
        ]);

        if ($validateData->fails()) {
            return response()->json([
                'message' => 'Invalid Field'
            ], 422);
        }

        Video::create([
            'title' => $request->title,
            'desc' => $request->desc,
            'video' => $request->video,
            'created_by' => $request->created_by
        ]);

        return response()->json([
            'message' => 'create video success'
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $video = Video::findOrFail($id);
        return response()->json([
            'video' => $video
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
        $video = Video::findOrFail($id);
        $validateData = Validator::make($request->all(), [
            'title' => 'required',
            'desc' => 'required',
            'video' => 'required',
            'created_by' => 'required',
        ]);

        if ($validateData->fails()) {
            return response()->json([
                'message' => 'Invalid Field'
            ], 422);
        }

        $video->update([
            'title' => $request->title,
            'desc' => $request->desc,
            'video' => $request->video,
            'created_by' => $request->created_by
        ]);

        return response()->json([
            'message' => 'update video success'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $video = Video::findOrFail($id);
        $video->delete();
        return response()->json([
            'message' => 'delete video success'
        ], 200);
    }
}
