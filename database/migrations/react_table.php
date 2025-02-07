<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('react', function (Blueprint $table) {
            $table->id();
            $table->string('table_data_1');
            $table->string('table_data_2')->unique();
            $table->timestamp('table_data_3')->nullable();
            $table->string('table_data_4');
        
        });

        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('react');
       
    }
};
