const constants = require('./constants');

export function columnPosition(columnIndex) {
  const columnStartY = constants.COLUMN_TOP_Y;
  const columnStartX = columnIndex * constants.COLUMN_WIDTH;
  const columnWidth = constants.COLUMN_WIDTH;
  const columnCenterX = columnStartX + constants.COLUMN_WIDTH / 2;
  return {
    columnCenterX,
    columnStartX,
    columnStartY,
    columnWidth,
  };
}

export function methodPosition(columnIndex, rowIndex) {
  const { columnCenterX } = columnPosition(columnIndex);
  const { rowCenterY } = rowPosition(columnIndex, rowIndex);
  const circleRadius = constants.METHOD_RADIUS;
  return {
    circleRadius,
    circleX: columnCenterX,
    circleY: rowCenterY,
  };
}

export function columnLineDashPosition(columnIndex, dashNumber) {
  const { columnCenterX } = columnPosition(columnIndex);
  const dashStartY = dashNumber * (constants.DASH_VERTICAL_MARGIN + constants.DASH_HEIGHT);
  const dashStartX = columnCenterX - constants.DASH_WIDTH/2;
  const dashHeight = constants.DASH_HEIGHT;
  const dashWidth = constants.DASH_WIDTH;
  return {
    dashHeight,
    dashStartX,
    dashStartY,
    dashWidth,
  };
}

export function methodNamePosition(rowNumber) {
  const { rowCenterY } = rowPosition(0, rowNumber);
  const height = constants.METHOD_LEGEND_FONT_SIZE * 3;
  const methodNameStartY = rowCenterY - height / 2;
  const methodNameStartX = constants.METHOD_LEGEND_LEFT_PADDING;
  const width = constants.METHOD_NAME_COLUMN_WIDTH - constants.METHOD_LEGEND_LEFT_PADDING;
  return {
    x: methodNameStartX,
    y: methodNameStartY,
    wrap: 'char',
    width: width,
    height: height,
    fontSize: constants.METHOD_LEGEND_FONT_SIZE,
  };
}

export function columnTitleHeight() {
  return constants.TITLE_FONT_SIZE + constants.TITLE_FRAME_VERTICAL_PADDING * 2;
}

export function columnTotalTitleFrameHeight() {
  return columnTitleHeight() + constants.TITLE_FRAME_STROKE_WIDTH * 2;
}

export function columnTitlePosition(columnIndex, title) {
  const { columnCenterX } = columnPosition(columnIndex);
  const titleTextWidth = Math.min(title.length * 0.5 * constants.TITLE_FONT_SIZE, constants.COLUMN_WIDTH - constants.TITLE_FRAME_HORIZONTAL_PADDING*2);
  const titleFrameWidth = Math.min(titleTextWidth + constants.TITLE_FRAME_HORIZONTAL_PADDING*2, constants.COLUMN_WIDTH);
  const titleFrameStartX = columnCenterX - titleFrameWidth / 2;
  const titleFrameStartY = 0;
  const titleFrameHeight = columnTitleHeight();
  const titleTextStartY = titleFrameStartY + constants.TITLE_FRAME_VERTICAL_PADDING;
  const titleTextHeight = titleFrameHeight - constants.TITLE_FRAME_VERTICAL_PADDING * 2;
  const titleTextStartX = columnCenterX - titleTextWidth / 2;
  return {
    frame: {
      x: titleFrameStartX,
      y: titleFrameStartY,
      width: titleFrameWidth,
      height: titleFrameHeight,
      cornerRadius: 100,
    },
    text: {
      x: titleTextStartX,
      y: titleTextStartY,
      width: titleTextWidth,
      height: titleTextHeight,
      fontSize: constants.TITLE_FONT_SIZE,
    },
  };
}

export function rowPosition(columnIndex, rowIndex) {
  const rowStartY = rowIndex * constants.ROW_HEIGHT;
  const rowCenterY = rowStartY + constants.VERTICAL_MARGIN_FROM_TOP + constants.ROW_HEIGHT / 2;
  //console.log("row position #" + rowIndex + ": " + rowCenterY);
  return {
    rowCenterY,
    rowStartY,
  };
}
