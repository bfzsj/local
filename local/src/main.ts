import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {join} from "path";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useStaticAssets(join(__dirname,'..','public'),{
      prefix:'/static/'
  })
  app.use('*',function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
      res.send(200);

    } else {
      next();
    }
  })

  await app.listen(8080);


}
bootstrap();
