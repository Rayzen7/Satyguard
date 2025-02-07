<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Article extends Model
{
    use HasFactory, HasApiTokens, Notifiable;
    protected $fillable = [
        'image',
        'title',
        'desc',
        'link',
        'category_id'
    ];

    public function category() {
        return $this->belongsToMany(Category::class, 'article_categories');
    }
}
