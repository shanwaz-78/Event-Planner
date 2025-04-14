import { Injectable } from '@nestjs/common';
import { CreatePlaceDetailDto } from './dto/create-place_detail.dto';
import { UpdatePlaceDetailDto } from './dto/update-place_detail.dto';

@Injectable()
export class PlaceDetailsService {
  create(createPlaceDetailDto: CreatePlaceDetailDto) {
    return 'This action adds a new placeDetail';
  }

  findAll() {
    return `This action returns all placeDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} placeDetail`;
  }

  update(id: number, updatePlaceDetailDto: UpdatePlaceDetailDto) {
    return `This action updates a #${id} placeDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} placeDetail`;
  }
}
