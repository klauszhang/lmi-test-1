import { TData, BaseModel } from '../../models/base'
import { CursorBasedList, toPaginatedData } from '../../models/pagination'
import { Dal } from '../dal'

export abstract class BaseRepo<
  TD extends TData,
  T extends BaseModel<TD>
> extends Dal<TD, T> {
  protected toPaginatedData(data: TD[], offset: number) {
    return toPaginatedData(data, offset === data.length)
  }

  async getAllWithPage(
    offset: number,
    after?: string
  ): Promise<CursorBasedList<TD>> {
    const data = await super.getAll(offset, after)
    this.logger.trace({ offset, after, data }, `get all data with page`)
    return this.toPaginatedData(data, offset)
  }
}
