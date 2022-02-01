<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index(Request $request)
    {
        $query = Post::query()->orderByDesc('created_at');
        $sort_field = $request->get('sort_field');
        $sort_direction = $request->get('sort_direction');

        if (!empty($value = $request->get('category_id'))) {
            $query->where('category_id', $value);
        }

        return PostResource::collection($query->orderBy($sort_field, $sort_direction)->paginate(4));
    }

    public function store(StorePostRequest $request)
    {
//        if($request->hasFile('thumbnail')){
//           $filename = $request->thumbnail->getClientOriginalName();
//           info($filename);
//        }
        $post = Post::create($request->validated());
        return new PostResource($post);
    }

    public function show(Post $post)
    {
        return new PostResource($post);
    }

    public function update(StorePostRequest $request, Post $post)
    {
        $post->update($request->validated());
        return new PostResource($post);
    }

    public function destroy($id)
    {
        //
    }
}
