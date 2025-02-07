<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Category extends Model
{
    protected $table = 'categories';
    use HasApiTokens, HasFactory, Notifiable;
    protected $fillable = [
        'name'
    ];

    public function article() {
        return $this->belongsToMany(Article::class, 'article_categories');
    }
}
