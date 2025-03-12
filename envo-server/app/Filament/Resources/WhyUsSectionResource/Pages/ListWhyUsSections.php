<?php

namespace App\Filament\Resources\WhyUsSectionResource\Pages;

use App\Filament\Resources\WhyUsSectionResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListWhyUsSections extends ListRecords
{
    protected static string $resource = WhyUsSectionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
