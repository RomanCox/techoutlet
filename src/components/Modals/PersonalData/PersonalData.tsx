import { classNames, Mods } from '@/helpers'
import { Text } from '@/components/shared/Text/Text'

import { IITem, personalData } from '@/constants'
import cls from './PersonalData.module.scss'

export const PersonalData = () => {
  const renderItem = (item: IITem) => {
    const isMainNumber =
      item.number && /^\d+\.$/.test(item.number)

    const itemTitleMods: Mods = {
      [cls.mainNumber]: isMainNumber
    }

    return (
      <div className={cls.item}>
        {(item.number || item.title) && (
          <Text
            className={classNames(cls.itemTitle, itemTitleMods)}
          >
            {item.number && <span>{item.number} </span>}
            {item.title}
          </Text>
        )}

        {item.text && <Text className={cls.itemText}>{item.text}</Text>}


        {item.list && (
          <ul className={cls.itemList}>
            {item.list.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
        )}

        {item.afterText &&
          item.afterText.map((line, i) => (
            <Text key={i} className={cls.afterText}>
              {line}
            </Text>
          ))}

        {item.table && (
          <div className={cls.tableContainer}>
            <table
              className={cls.table}
            >
              <thead>
              <tr>
                <th />
                {item.table.columns.map((col) => (
                  <th key={col}>
                    {col}
                  </th>
                ))}
              </tr>
              </thead>

              <tbody>
              {item.table.rows.map((row) => (
                <tr key={row.title}>
                  <td>
                    <b>{row.title}</b>
                  </td>

                  {item.table?.columns.map((col) => (
                    <td key={col}>
                      {row.cells[col]}
                    </td>
                  ))}
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        )}

        {item.items && (
          <div style={{ paddingLeft: 16 }}>
            {item.items.map((child, i) => (
              <div key={i}>{renderItem(child)}</div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={cls.personalDataContainer}>
      <Text as='h2'>
        {personalData.title}
      </Text>

      <Text>
        {personalData.updatedAt}
      </Text>

      {personalData.sections.map((section, i) => (
        <div key={i} className={cls.section}>
          <Text as='h3'>
            {section.title}
          </Text>

          {section.text && (
            <Text>
              {section.text}
            </Text>
          )}

          {section.items?.map((item, j) => (
            <div key={j}>{renderItem(item)}</div>
          ))}
        </div>
      ))}
    </div>
  );
};