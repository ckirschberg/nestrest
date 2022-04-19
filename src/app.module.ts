import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherController } from './teachers/teacher.controller';
import { TeacherService } from './teachers/teacher.service';

@Module({
  imports: [],
  controllers: [AppController, TeacherController],
  providers: [AppService, TeacherService],
})
export class AppModule { }
