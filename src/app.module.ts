// src/app.module.ts
import { Module } from '@nestjs/common';
import { MealsController } from './meals.controller';

@Module({
  imports: [],
  controllers: [MealsController],
})
export class AppModule {}
