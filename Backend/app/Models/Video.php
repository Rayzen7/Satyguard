<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Video extends Model
{
    use HasApiTokens, HasFactory, Notifiable;
    protected $fillable = [
        'video',
        'title',
        'desc',
        'created_by'
    ];
}
