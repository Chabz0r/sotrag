import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {StoragesService} from "./storages.service";
import {StoragesController} from "./storages.controller";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [
    StoragesService,
  ],
  controllers: [StoragesController],
})
export class StoragesModule {
}
